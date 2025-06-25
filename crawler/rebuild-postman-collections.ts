#!/usr/bin/env bun

/**
 * Script to rebuild OPNsense Postman collections from crawler JSON files
 */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface Endpoint {
  method: string;
  module: string;
  controller: string;
  command: string;
  parameters: string;
  url: string;
}

interface ModuleData {
  name: string;
  type: 'core' | 'plugin';
  url: string;
  endpoints: Endpoint[];
}

interface PostmanRequest {
  name: string;
  request: {
    method: string;
    header: any[];
    url: {
      raw: string;
      host: string[];
      path: string[];
    };
    body?: {
      mode: string;
      raw: string;
      options: {
        raw: {
          language: string;
        };
      };
    };
    description: string;
  };
  response: any[];
}

interface PostmanCollection {
  info: {
    _postman_id: string;
    name: string;
    description: string;
    schema: string;
    _exporter_id: string;
  };
  item: any[];
  auth: {
    type: string;
    basic: Array<{
      key: string;
      value: string;
      type: string;
    }>;
  };
  event: Array<{
    listen: string;
    script: {
      type: string;
      packages: {};
      exec: string[];
    };
  }>;
  variable: Array<{
    key: string;
    value: string;
    type: string;
  }>;
}

class PostmanCollectionBuilder {
  private readonly crawlerPath =
    '/Users/rstovall/Development/opnsense-typescript-client/crawler/storage/key_value_stores/opnsense-api-modules';

  private createBaseCollection(name: string, description: string): PostmanCollection {
    return {
      info: {
        _postman_id: this.generateUUID(),
        name,
        description,
        schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
        _exporter_id: '32163937',
      },
      item: [],
      auth: {
        type: 'basic',
        basic: [
          {
            key: 'username',
            value: '{{opnsense_api_key}}',
            type: 'string',
          },
          {
            key: 'password',
            value: '{{opnsense_api_secret}}',
            type: 'string',
          },
        ],
      },
      event: [
        {
          listen: 'prerequest',
          script: {
            type: 'text/javascript',
            packages: {},
            exec: [''],
          },
        },
        {
          listen: 'test',
          script: {
            type: 'text/javascript',
            packages: {},
            exec: [''],
          },
        },
      ],
      variable: [
        {
          key: 'opnsense_base_url',
          value: 'http://10.0.1.1/api',
          type: 'string',
        },
        {
          key: 'opnsense_api_key',
          value: 'jCwbF1Y835aeOcDNxO1P6Ndjh8M7MJulpTymLdq+3WPjL6LQ/QRo6MfhHuKt6SVk87posU3V4IYZSsOo',
          type: 'string',
        },
        {
          key: 'opnsense_api_secret',
          value: 'qQ6Jc9uwja6zINO/iYtjpnNJV7ka95XyvekpOUAs9uBP2xbXrTBaPWgxMBzIdpDp+1IUGvhnfGUkGvOn',
          type: 'string',
        },
      ],
    };
  }

  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      const v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  private formatEndpointName(endpoint: Endpoint): string {
    const command = endpoint.command.replace(/_/g, ' ');
    const words = command.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return words.join(' ');
  }

  private formatDescription(endpoint: Endpoint): string {
    const action =
      endpoint.method === 'GET'
        ? 'Get'
        : endpoint.method === 'POST'
        ? 'Execute'
        : endpoint.method === 'PUT'
        ? 'Update'
        : endpoint.method === 'DELETE'
        ? 'Delete'
        : 'Call';

    const command = endpoint.command.replace(/_/g, ' ');
    return `${action} ${command} for ${endpoint.module} ${endpoint.controller}`;
  }

  private convertEndpointToPostmanRequest(endpoint: Endpoint): PostmanRequest {
    const postmanUrl = endpoint.url.replace(/\{(\w+)\}/g, '{{$1}}');

    const pathComponents = endpoint.url
      .replace('/api/', '')
      .split('/')
      .filter(p => p);

    const request: PostmanRequest = {
      name: this.formatEndpointName(endpoint),
      request: {
        method: endpoint.method,
        header: [],
        url: {
          raw: `{{opnsense_base_url}}${postmanUrl}`,
          host: ['{{opnsense_base_url}}'],
          path: pathComponents.map(component => component.replace(/\{(\w+)\}/g, '{{$1}}')),
        },
        description: this.formatDescription(endpoint),
      },
      response: [],
    };

    if (['POST', 'PUT', 'PATCH'].includes(endpoint.method)) {
      request.request.body = {
        mode: 'raw',
        raw: '{}',
        options: {
          raw: {
            language: 'json',
          },
        },
      };
    }

    return request;
  }

  private groupEndpointsByController(endpoints: Endpoint[]): Record<string, Endpoint[]> {
    return endpoints.reduce((groups, endpoint) => {
      const key = endpoint.controller;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(endpoint);
      return groups;
    }, {} as Record<string, Endpoint[]>);
  }

  private createControllerFolder(controllerName: string, endpoints: Endpoint[]) {
    const formattedName = controllerName.charAt(0).toUpperCase() + controllerName.slice(1);

    return {
      name: formattedName,
      item: endpoints.map((endpoint: Endpoint) => this.convertEndpointToPostmanRequest(endpoint)),
    };
  }

  private createModuleFolder(moduleData: ModuleData) {
    const groupedEndpoints = this.groupEndpointsByController(moduleData.endpoints);

    return {
      name: moduleData.name,
      item: Object.entries(groupedEndpoints).map(([controller, endpoints]) =>
        this.createControllerFolder(controller, endpoints)
      ),
      description: `${moduleData.name} module API endpoints`,
    };
  }

  private loadModuleData(filename: string): ModuleData {
    const filePath = join(this.crawlerPath, filename);
    const content = readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  }

  private getModuleFiles(type: 'core' | 'plugin'): string[] {
    const allFiles = readdirSync(this.crawlerPath);
    return allFiles.filter((file: string) => file.startsWith(`${type}-`) && file.endsWith('.json'));
  }

  public buildCoreCollection(): PostmanCollection {
    console.log('🔍 Building Core API Collection...');

    const collection = this.createBaseCollection(
      'OPNsense Complete API Collection',
      'Complete collection of all OPNsense Core API endpoints'
    );

    const coreFiles = this.getModuleFiles('core');
    console.log(`📁 Found ${coreFiles.length} core modules`);

    let totalEndpoints = 0;

    coreFiles.forEach((filename: string) => {
      const moduleData = this.loadModuleData(filename);
      const moduleFolder = this.createModuleFolder(moduleData);
      collection.item.push(moduleFolder);

      totalEndpoints += moduleData.endpoints.length;
      console.log(`  ${moduleData.name}: ${moduleData.endpoints.length} endpoints`);
    });

    console.log(`Total Core Endpoints: ${totalEndpoints}`);
    return collection;
  }

  public buildPluginsCollection(): PostmanCollection {
    console.log('\n🔍 Building Plugins API Collection...');

    const collection = this.createBaseCollection(
      'OPNsense Plugins API Collection',
      'Complete collection of all OPNsense Plugin API endpoints'
    );

    const pluginFiles = this.getModuleFiles('plugin');
    console.log(`📁 Found ${pluginFiles.length} plugin modules`);

    let totalEndpoints = 0;

    pluginFiles.forEach((filename: string) => {
      const moduleData = this.loadModuleData(filename);
      const moduleFolder = this.createModuleFolder(moduleData);
      collection.item.push(moduleFolder);

      totalEndpoints += moduleData.endpoints.length;
      console.log(`  ${moduleData.name}: ${moduleData.endpoints.length} endpoints`);
    });

    console.log(`Total Plugin Endpoints: ${totalEndpoints}`);
    return collection;
  }

  public saveCollection(collection: PostmanCollection, filename: string): void {
    const outputPath = `/Users/rstovall/Development/opnsense-typescript-client/postman/${filename}`;
    writeFileSync(outputPath, JSON.stringify(collection, null, 2), 'utf-8');
    console.log(`Saved: ${filename}`);
  }

  public generateReport(coreCollection: PostmanCollection, pluginsCollection: PostmanCollection): void {
    console.log('\n' + '='.repeat(60));
    console.log('POSTMAN COLLECTION GENERATION REPORT');
    console.log('='.repeat(60));

    const countEndpoints = (collection: PostmanCollection): number => {
      let count = 0;
      collection.item.forEach((module: any) => {
        module.item.forEach((controller: any) => {
          count += controller.item ? controller.item.length : 0;
        });
      });
      return count;
    };

    const coreEndpoints = countEndpoints(coreCollection);
    const pluginEndpoints = countEndpoints(pluginsCollection);
    const totalEndpoints = coreEndpoints + pluginEndpoints;

    console.log(`Core Modules: ${coreCollection.item.length}`);
    console.log(`Plugin Modules: ${pluginsCollection.item.length}`);
    console.log(`Core Endpoints: ${coreEndpoints}`);
    console.log(`Plugin Endpoints: ${pluginEndpoints}`);
    console.log(`Total Endpoints: ${totalEndpoints}`);

    console.log('\nCollections generated successfully!');
    console.log('Files created:');
    console.log('   - OPNsense Complete API Collection.postman_collection.json');
    console.log('   - OPNsense Plugins API Collection.postman_collection.json');

    console.log('\nReady for import into Postman!');
  }
}

async function main() {
  console.log('Starting OPNsense Postman Collection Generation');
  console.log('Source: crawler/storage/key_value_stores/opnsense-api-modules/');
  console.log('='.repeat(60));

  const builder = new PostmanCollectionBuilder();

  try {
    const coreCollection = builder.buildCoreCollection();
    const pluginsCollection = builder.buildPluginsCollection();

    builder.saveCollection(coreCollection, 'OPNsense Complete API Collection.postman_collection.json');
    builder.saveCollection(pluginsCollection, 'OPNsense Plugins API Collection.postman_collection.json');
    builder.generateReport(coreCollection, pluginsCollection);
  } catch (error) {
    console.error('Error generating collections:', error);
    process.exit(1);
  }
}

main().catch(console.error);
