import { createPlaywrightRouter, KeyValueStore, PlaywrightCrawler } from 'crawlee';
import fs from 'fs';
import path from 'path';

interface ApiEndpoint {
  method: string;
  module: string;
  controller: string;
  command: string;
  parameters?: string;
  url: string;
}

interface ModuleData {
  name: string;
  type: 'core' | 'plugin';
  url: string;
  endpoints: ApiEndpoint[];
}

class OPNsenseApiCrawler {
  private startUrl = 'https://docs.opnsense.org/development/api.html';
  private storageDir = './crawler/storage';

  constructor() {
    process.env.CRAWLEE_STORAGE_DIR = path.resolve(this.storageDir);

    if (!fs.existsSync(this.storageDir)) {
      fs.mkdirSync(this.storageDir, { recursive: true });
    }
  }

  createRouter() {
    const router = createPlaywrightRouter();

    router.addDefaultHandler(async ({ page, enqueueLinks, request }) => {
      console.log(`Processing main API page: ${request.url}`);

      await page.waitForLoadState('networkidle');

      const coreModuleUrls = await page.$$eval('a[href*="api/core/"]', (els: Element[]) => {
        return els.map((el: Element) => {
          const href = el.getAttribute('href');
          const text = el.textContent?.trim();
          return {
            url: href?.startsWith('http') ? href : `https://docs.opnsense.org/development/${href}`,
            name: text || '',
            type: 'core' as const,
          };
        });
      });

      const pluginModuleUrls = await page.$$eval('a[href*="api/plugins/"]', (els: Element[]) => {
        return els.map((el: Element) => {
          const href = el.getAttribute('href');
          const text = el.textContent?.trim();
          return {
            url: href?.startsWith('http') ? href : `https://docs.opnsense.org/development/${href}`,
            name: text || '',
            type: 'plugin' as const,
          };
        });
      });

      console.log(`Found ${coreModuleUrls.length} core modules and ${pluginModuleUrls.length} plugin modules`);

      const allModules = [...coreModuleUrls, ...pluginModuleUrls];

      for (const module of allModules) {
        await enqueueLinks({
          urls: [module.url],
          userData: {
            moduleName: module.name,
            moduleType: module.type,
          },
          label: 'MODULE',
        });
      }
    });

    router.addHandler('MODULE', async ({ page, request }) => {
      const userData = request.userData as { moduleName: string; moduleType: 'core' | 'plugin' };

      console.log(`Processing ${userData.moduleType} module: ${userData.moduleName} - ${request.url}`);

      await page.waitForLoadState('networkidle');

      try {
        const endpoints = await this.extractEndpoints(page, userData.moduleName, userData.moduleType, request.url);

        const moduleData: ModuleData = {
          name: userData.moduleName,
          type: userData.moduleType,
          url: request.url,
          endpoints,
        };

        await this.storeModuleData(moduleData);

        console.log(`Extracted ${endpoints.length} endpoints from ${userData.moduleName}`);
      } catch (error) {
        console.error(`Error processing module ${userData.moduleName}:`, error);
      }
    });

    return router;
  }

  private async extractEndpoints(
    page: any,
    moduleName: string,
    _moduleType: string,
    url: string
  ): Promise<ApiEndpoint[]> {
    const endpoints: ApiEndpoint[] = [];
    const tableSelectors = ['table', '.rst-content table', '.document table', 'table[border]', 'table.docutils'];

    for (const selector of tableSelectors) {
      try {
        const tables = await page.locator(selector).all();

        for (const table of tables) {
          const headers = await table.locator('th, thead td').allTextContents();
          const headerText = headers.join(' ').toLowerCase();

          if (!headerText.includes('method') && !headerText.includes('module') && !headerText.includes('controller')) {
            continue;
          }

          const rows = await table.locator('tbody tr, tr').all();

          for (const row of rows) {
            try {
              const cells = await row.locator('td, th').allTextContents();

              if (cells.length < 4 || cells.some((cell: string) => cell.toLowerCase().includes('method'))) {
                continue;
              }

              const endpoint = this.parseEndpointRow(cells, moduleName, url);

              if (endpoint) {
                endpoints.push(endpoint);
              }
            } catch (rowError) {
              continue;
            }
          }
        }

        if (endpoints.length > 0) {
          break;
        }
      } catch (selectorError) {
        continue;
      }
    }

    return endpoints;
  }

  private parseEndpointRow(cells: string[], moduleName: string, pageUrl: string): ApiEndpoint | null {
    const cleanCells = cells.map((cell: string) => cell.trim().replace(/\s+/g, ' '));

    if (cleanCells.length >= 4) {
      const method = cleanCells[0]?.toUpperCase();
      const module = cleanCells[1] || moduleName.toLowerCase();
      const controller = cleanCells[2];
      const command = cleanCells[3];
      const parameters = cleanCells[4] || '';

      if (method && ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes(method) && controller && command) {
        const apiUrl = this.constructApiUrl(module, controller, command, parameters);

        return {
          method,
          module,
          controller,
          command,
          parameters,
          url: apiUrl,
        };
      }
    }

    return null;
  }

  private constructApiUrl(module: string, controller: string, command: string, parameters: string): string {
    let url = `/api/${module}/${controller}/${command}`;

    if (parameters) {
      const paramMatches = parameters.match(/\$\w+/g);
      if (paramMatches) {
        paramMatches.forEach((param: string) => {
          url += `/{${param.substring(1)}}`;
        });
      }
    }

    return url;
  }

  private async storeModuleData(moduleData: ModuleData): Promise<void> {
    const store = await KeyValueStore.open('opnsense-api-modules');
    const key = `${moduleData.type}-${moduleData.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    await store.setValue(key, moduleData);
  }

  async run(): Promise<void> {
    const crawler = new PlaywrightCrawler({
      requestHandler: this.createRouter(),
      maxRequestsPerCrawl: 100,
      headless: true,
      requestHandlerTimeoutSecs: 60,
    });

    await crawler.run([this.startUrl]);
    await this.generateReport();
  }

  private async generateReport(): Promise<void> {
    console.log('\nCRAWLING SUMMARY:');
    console.log('='.repeat(50));

    let totalEndpoints = 0;

    const modulesByType: { core: ModuleData[]; plugin: ModuleData[] } = { core: [], plugin: [] };
    const fs = await import('fs');
    const path = await import('path');

    const storageDir = path.resolve(this.storageDir, 'key_value_stores', 'opnsense-api-modules');

    try {
      const files = fs.readdirSync(storageDir);
      const moduleFiles = files.filter((file: string) => file.endsWith('.json'));

      console.log(`Found ${moduleFiles.length} stored modules`);

      for (const file of moduleFiles) {
        try {
          const filePath = path.resolve(storageDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const moduleData = JSON.parse(content) as ModuleData;

          if (moduleData && moduleData.type && moduleData.endpoints) {
            modulesByType[moduleData.type].push(moduleData);
            totalEndpoints += moduleData.endpoints.length;
          }
        } catch (error) {
          console.warn(`Failed to read module data for ${file}:`, error);
        }
      }
    } catch (error) {
      console.error('Failed to read storage directory:', error);
      console.log('Falling back to empty results...');
    }

    console.log(`Core Modules: ${modulesByType.core.length}`);
    console.log(`Plugin Modules: ${modulesByType.plugin.length}`);
    console.log(`Total Endpoints: ${totalEndpoints}`);

    // Generate detailed markdown report
    await this.generateMarkdownReport(modulesByType);
  }

  private async generateMarkdownReport(modulesByType: { core: ModuleData[]; plugin: ModuleData[] }): Promise<void> {
    const store = await KeyValueStore.open('opnsense-api-reports');

    let markdown = '# OPNsense API Complete Documentation\n\n';

    markdown += `Generated on: ${new Date().toISOString()}\n\n`;
    markdown += '## Core API Modules\n\n';

    for (const module of modulesByType.core.sort((a, b) => a.name.localeCompare(b.name))) {
      markdown += `### ${module.name}\n`;
      markdown += `**Base URL**: \`/api/${module.name.toLowerCase()}/\`\n`;
      markdown += `**Documentation**: ${module.url}\n\n`;

      if (module.endpoints.length > 0) {
        markdown += '| Method | Controller | Command | Parameters | Full URL |\n';
        markdown += '|--------|------------|---------|------------|----------|\n';

        for (const endpoint of module.endpoints) {
          const params = endpoint.parameters || '';
          markdown += `| ${endpoint.method} | ${endpoint.controller} | ${endpoint.command} | ${params} | \`${endpoint.url}\` |\n`;
        }
        markdown += '\n';
      } else {
        markdown += '*No endpoints documented*\n\n';
      }
    }

    markdown += '## Plugin API Modules\n\n';

    for (const module of modulesByType.plugin.sort((a, b) => a.name.localeCompare(b.name))) {
      markdown += `### ${module.name}\n`;
      markdown += `**Base URL**: \`/api/${module.name.toLowerCase()}/\`\n`;
      markdown += `**Documentation**: ${module.url}\n\n`;

      if (module.endpoints.length > 0) {
        markdown += '| Method | Controller | Command | Parameters | Full URL |\n';
        markdown += '|--------|------------|---------|------------|----------|\n';

        for (const endpoint of module.endpoints) {
          const params = endpoint.parameters || '';
          markdown += `| ${endpoint.method} | ${endpoint.controller} | ${endpoint.command} | ${params} | \`${endpoint.url}\` |\n`;
        }
        markdown += '\n';
      } else {
        markdown += '*No endpoints documented*\n\n';
      }
    }

    await store.setValue('complete-api-documentation.md', markdown);
    console.log('\n📄 Complete documentation saved to complete-api-documentation.md');
    console.log(`📁 Storage location: ${this.storageDir}`);
  }
}

export default OPNsenseApiCrawler;

async function main() {
  const crawler = new OPNsenseApiCrawler();
  await crawler.run();
}

main().catch(console.error);
