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
  modelParameters?: ModelParameter[];
}

interface ModelParameter {
  id: string;
  type: string;
  required: boolean;
  help?: string;
  constraints?: {
    min?: number;
    max?: number;
    pattern?: string;
    validationMessage?: string;
    options?: string[];
  };
}

interface ModuleData {
  name: string;
  type: 'core' | 'plugin';
  url: string;
  endpoints: ApiEndpoint[];
  xmlModelUrl?: string;
  xmlContent?: string;
  modelStructure?: any;
}

class OPNsenseApiCrawler {
  private startUrl = 'https://docs.opnsense.org/development/api.html#plugins-api';
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
        const xmlModelUrl = await this.extractXmlModelUrl(page);
        let xmlContent: string | undefined;
        let modelStructure: any;

        if (xmlModelUrl) {
          xmlContent = await this.fetchXmlContent(xmlModelUrl);
          if (xmlContent) {
            modelStructure = this.parseXmlToJson(xmlContent);
            // Match parameters to endpoints
            const enhancedEndpoints = this.matchParametersToEndpoints(endpoints, modelStructure);
            endpoints.splice(0, endpoints.length, ...enhancedEndpoints);
          }
        }

        const moduleData: ModuleData = {
          name: userData.moduleName,
          type: userData.moduleType,
          url: request.url,
          endpoints,
          xmlModelUrl,
          xmlContent,
          modelStructure,
        };

        await this.storeModuleData(moduleData);

        console.log(`Extracted ${endpoints.length} endpoints from ${userData.moduleName}`);
        if (xmlModelUrl) {
          console.log(`Found XML model: ${xmlModelUrl}`);
        }
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
    let modulesWithXml = 0;

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
            if (moduleData.xmlModelUrl) {
              modulesWithXml++;
            }
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
    console.log(`Modules with XML Models: ${modulesWithXml}`);

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
      markdown += `**Documentation**: ${module.url}\n`;
      if (module.xmlModelUrl) {
        markdown += `**Model XML**: ${module.xmlModelUrl}\n`;
      }
      markdown += '\n';

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
      markdown += `**Documentation**: ${module.url}\n`;
      if (module.xmlModelUrl) {
        markdown += `**Model XML**: ${module.xmlModelUrl}\n`;
      }
      markdown += '\n';

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

  private async extractXmlModelUrl(page: any): Promise<string | undefined> {
    try {
      const xmlSelectors = [
        'td p em:has-text("model") ~ a[href*=".xml"]',
        'td:has(em:text("model")) a[href*=".xml"]',
        'td a[href*="/models/"][href$=".xml"]',
        'a.reference.external[href*="github.com"][href*=".xml"]',
      ];

      for (const selector of xmlSelectors) {
        try {
          const xmlLink = await page.locator(selector).first();
          if ((await xmlLink.count()) > 0) {
            const href = await xmlLink.getAttribute('href');
            if (href && href.includes('.xml')) {
              console.log(`Found XML model URL using selector: ${selector}`);
              return href;
            }
          }
        } catch (error) {
          continue;
        }
      }

      const allLinks = await page.locator('a[href*=".xml"]').all();
      for (const link of allLinks) {
        try {
          const href = await link.getAttribute('href');
          const text = await link.textContent();
          const parentText = await link.locator('..').textContent();

          if (href && (parentText?.includes('model') || text?.includes('Model'))) {
            console.log(`Found XML model URL via fallback search: ${href}`);
            return href;
          }
        } catch (error) {
          continue;
        }
      }
    } catch (error) {
      console.error('Error extracting XML model URL:', error);
    }

    return undefined;
  }

  private githubToRawUrl(githubUrl: string): string {
    // Convert GitHub blob URLs to raw content URLs
    // From: https://github.com/owner/repo/blob/branch/path
    // To: https://raw.githubusercontent.com/owner/repo/refs/heads/branch/path

    const blobMatch = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)/);
    if (blobMatch) {
      const [, owner, repo, branch, path] = blobMatch;
      // For tags, use refs/tags/ instead of refs/heads/
      const refType = branch && branch.match(/^v?\d+\.\d+/) ? 'tags' : 'heads';
      return `https://raw.githubusercontent.com/${owner}/${repo}/refs/${refType}/${branch}/${path}`;
    }

    return githubUrl;
  }

  private async fetchXmlContent(xmlUrl: string): Promise<string | undefined> {
    try {
      const rawUrl = this.githubToRawUrl(xmlUrl);
      console.log(`Fetching XML from: ${rawUrl}`);

      const response = await fetch(rawUrl);
      if (response.ok) {
        const content = await response.text();
        console.log(`Successfully fetched XML content (${content.length} characters)`);
        return content;
      } else {
        console.error(`Failed to fetch XML: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching XML content:', error);
    }
    return undefined;
  }

  private parseXmlToJson(xmlContent: string): any {
    try {
      const modelStructure: any = {
        fields: {},
        containers: {},
        tabs: {},
      };

      // Parse fields
      const fieldMatches = xmlContent.matchAll(/<field\s+([^>]+)>([^<]*(?:<(?!\/field>)[^<]*)*)<\/field>/gs);

      for (const match of fieldMatches) {
        const fieldAttributes = match[1];
        const fieldContent = match[2];

        if (!fieldAttributes) continue;

        const idMatch = fieldAttributes.match(/id="([^"]+)"/);
        if (!idMatch) continue;

        const fieldId = idMatch[1];
        const field: any = {
          id: fieldId,
          type: fieldAttributes.match(/type="([^"]+)"/)?.[1] || 'TextField',
          help: fieldAttributes.match(/help="([^"]+)"/)?.[1],
        };

        // Parse field content
        if (fieldContent) {
          // Check for required
          if (fieldContent.includes('<Required>Y</Required>')) {
            field.required = true;
          }

          // Check for default value
          const defaultMatch = fieldContent.match(/<default>([^<]+)<\/default>/);
          if (defaultMatch) {
            field.default = defaultMatch[1];
          }

          // Check for min/max values
          const minMatch = fieldContent.match(/<MinimumValue>(\d+)<\/MinimumValue>/);
          const maxMatch = fieldContent.match(/<MaximumValue>(\d+)<\/MaximumValue>/);
          if (minMatch || maxMatch) {
            field.constraints = field.constraints || {};
            if (minMatch && minMatch[1]) field.constraints.min = parseInt(minMatch[1], 10);
            if (maxMatch && maxMatch[1]) field.constraints.max = parseInt(maxMatch[1], 10);
          }

          // Check for validation
          const validationMatch = fieldContent.match(/<ValidationMessage>([^<]+)<\/ValidationMessage>/);
          if (validationMatch) {
            field.constraints = field.constraints || {};
            field.constraints.validationMessage = validationMatch[1];
          }

          // Check for mask/pattern
          const maskMatch = fieldContent.match(/<mask>([^<]+)<\/mask>/);
          if (maskMatch) {
            field.constraints = field.constraints || {};
            field.constraints.pattern = maskMatch[1];
          }

          // Check for options (OptionField)
          const optionMatches = fieldContent.matchAll(/<option value="([^"]+)">([^<]+)<\/option>/g);
          const options: string[] = [];
          for (const optMatch of optionMatches) {
            if (optMatch[1]) {
              options.push(optMatch[1]);
            }
          }
          if (options.length > 0) {
            field.constraints = field.constraints || {};
            field.constraints.options = options;
          }
        }

        if (fieldId) {
          modelStructure.fields[fieldId] = field;
        }
      }

      // Parse containers (items)
      const containerMatches = xmlContent.matchAll(
        /<(\w+)\s+type="ArrayField"[^>]*>([^<]*(?:<(?!\/\1>)[^<]*)*)<\/\1>/gs
      );

      for (const match of containerMatches) {
        const containerName = match[1];
        const containerContent = match[2];

        if (!containerName) continue;

        modelStructure.containers[containerName] = {
          type: 'ArrayField',
          fields: {},
        };

        // Parse fields within container
        if (containerContent) {
          const containerFieldMatches = containerContent.matchAll(
            /<field\s+([^>]+)>([^<]*(?:<(?!\/field>)[^<]*)*)<\/field>/gs
          );
          for (const fieldMatch of containerFieldMatches) {
            const fieldAttributes = fieldMatch[1];
            const fieldContent = fieldMatch[2];

            if (!fieldAttributes) continue;

            const idMatch = fieldAttributes.match(/id="([^"]+)"/);

            if (idMatch) {
              const fieldId = idMatch[1];
              if (fieldId && containerName) {
                modelStructure.containers[containerName].fields[fieldId] = {
                  id: fieldId,
                  type: fieldAttributes.match(/type="([^"]+)"/)?.[1] || 'TextField',
                  help: fieldAttributes.match(/help="([^"]+)"/)?.[1],
                  required: fieldContent?.includes('<Required>Y</Required>') || false,
                };
              }
            }
          }
        }
      }

      return modelStructure;
    } catch (error) {
      console.error('Error parsing XML to JSON:', error);
      return null;
    }
  }

  private matchParametersToEndpoints(endpoints: ApiEndpoint[], modelStructure: any): ApiEndpoint[] {
    if (!modelStructure || !modelStructure.fields) {
      return endpoints;
    }

    return endpoints.map(endpoint => {
      const enhancedEndpoint = { ...endpoint };

      // Try to match based on command name
      const commandLower = endpoint.command.toLowerCase();
      const controllerLower = endpoint.controller.toLowerCase();

      // Determine which fields might be relevant for this endpoint
      const relevantFields: ModelParameter[] = [];

      // For GET endpoints (search, get), usually all fields are potential filters
      if (endpoint.method === 'GET') {
        if (commandLower.includes('search') || commandLower === 'get') {
          // Add common search parameters
          relevantFields.push({
            id: 'current',
            type: 'Integer',
            required: false,
            help: 'Current page number',
            constraints: { min: 1 },
          });
          relevantFields.push({
            id: 'rowCount',
            type: 'Integer',
            required: false,
            help: 'Number of rows per page',
            constraints: { min: 1, max: 1000 },
          });
          relevantFields.push({
            id: 'searchPhrase',
            type: 'TextField',
            required: false,
            help: 'Search phrase to filter results',
          });
        }
      }

      // For POST endpoints (add, set, update), include model fields
      if (endpoint.method === 'POST') {
        if (commandLower.includes('add') || commandLower.includes('set') || commandLower.includes('update')) {
          // Check if this operates on a container
          const containerName = Object.keys(modelStructure.containers || {}).find(
            name => controllerLower.includes(name.toLowerCase()) || commandLower.includes(name.toLowerCase())
          );

          if (containerName && modelStructure.containers[containerName]) {
            // Add container fields
            Object.values(modelStructure.containers[containerName].fields).forEach((field: any) => {
              relevantFields.push({
                id: `${containerName}.${field.id}`,
                type: field.type,
                required: field.required || false,
                help: field.help,
                constraints: field.constraints,
              });
            });
          } else {
            // Add general model fields
            Object.values(modelStructure.fields).forEach((field: any) => {
              relevantFields.push({
                id: field.id,
                type: field.type,
                required: field.required || false,
                help: field.help,
                constraints: field.constraints,
              });
            });
          }
        }
      }

      // For toggle endpoints
      if (commandLower.includes('toggle')) {
        relevantFields.push({
          id: 'enabled',
          type: 'BooleanField',
          required: false,
          help: 'Enable or disable the item',
        });
      }

      // For del/delete endpoints
      if (commandLower.includes('del')) {
        relevantFields.push({
          id: 'uuid',
          type: 'TextField',
          required: true,
          help: 'UUID of the item to delete',
        });
      }

      if (relevantFields.length > 0) {
        enhancedEndpoint.modelParameters = relevantFields;
      }

      return enhancedEndpoint;
    });
  }
}

export default OPNsenseApiCrawler;

async function main() {
  const crawler = new OPNsenseApiCrawler();
  await crawler.run();
}

main().catch(console.error);
