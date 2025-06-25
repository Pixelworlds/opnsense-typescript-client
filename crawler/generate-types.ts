#!/usr/bin/env bun

/**
 * Script to generate TypeScript type definitions for all OPNsense modules
 * Based on Postman collection structure and common API patterns
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface PostmanRequest {
  name: string;
  request: {
    method: string;
    url: {
      raw: string;
      path: string[];
    };
    description?: string;
  };
}

interface PostmanController {
  name: string;
  item: PostmanRequest[];
}

interface PostmanModule {
  name: string;
  item: PostmanController[];
  description?: string;
}

interface PostmanCollection {
  info: {
    name: string;
    description: string;
  };
  item: PostmanModule[];
}

class TypeGenerator {
  private readonly typesDir = resolve(__dirname, '../src/types');
  private readonly coreCollection = resolve(
    __dirname,
    '../postman/OPNsense Complete API Collection.postman_collection.json'
  );
  private readonly pluginsCollection = resolve(
    __dirname,
    '../postman/OPNsense Plugins API Collection.postman_collection.json'
  );

  private loadCollection(path: string): PostmanCollection {
    const content = readFileSync(path, 'utf-8');
    return JSON.parse(content);
  }

  private generateCommonTypes(): string {
    return `// Common API response types for OPNsense
export interface ApiResponse<T = any> {
  result: 'ok' | 'failed';
  data?: T;
  message?: string;
  validations?: Record<string, string>;
}

export interface ApiResult {
  result: 'ok' | 'failed';
  message?: string;
}

export interface SearchResult<T = any> {
  rows: T[];
  rowCount: number;
  total: number;
  current: number;
}

export interface BaseRecord {
  uuid?: string;
  enabled?: string | boolean;
  description?: string;
}

export interface ServiceStatus {
  status: 'running' | 'stopped' | 'unknown';
  description?: string;
}

export interface ServiceControl {
  result: 'ok' | 'failed';
  message?: string;
}

export interface ConfigTest {
  result: 'ok' | 'failed';
  message?: string;
}

// Generic CRUD operations
export interface CrudOperations<T extends BaseRecord> {
  search?: (params?: Record<string, any>) => Promise<ApiResponse<SearchResult<T>>>;
  get?: (uuid?: string) => Promise<ApiResponse<T>>;
  add?: (item: Partial<T>) => Promise<ApiResponse<ApiResult>>;
  update?: (uuid: string, item: Partial<T>) => Promise<ApiResponse<ApiResult>>;
  delete?: (uuid: string) => Promise<ApiResponse<ApiResult>>;
  toggle?: (uuid: string, enabled?: boolean) => Promise<ApiResponse<ApiResult>>;
}

// Service operations
export interface ServiceOperations {
  status?: () => Promise<ApiResponse<ServiceStatus>>;
  start?: () => Promise<ApiResponse<ServiceControl>>;
  stop?: () => Promise<ApiResponse<ServiceControl>>;
  restart?: () => Promise<ApiResponse<ServiceControl>>;
  reconfigure?: () => Promise<ApiResponse<ServiceControl>>;
  configtest?: () => Promise<ApiResponse<ConfigTest>>;
}

// Settings operations
export interface SettingsOperations<T = any> {
  get?: () => Promise<ApiResponse<T>>;
  set?: (config: Partial<T>) => Promise<ApiResponse<ApiResult>>;
}
`;
  }

  private toPascalCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  private toCamelCase(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  private generateInterfaceName(moduleName: string, controllerName: string, suffix: string = ''): string {
    const module = this.toPascalCase(moduleName);
    const controller = this.toPascalCase(controllerName);
    return `${module}${controller}${suffix}`;
  }

  private extractParametersFromPath(path: string[]): string[] {
    return path
      .filter((segment: string) => segment.startsWith('{{') && segment.endsWith('}}'))
      .map((segment: string) => segment.replace(/[{}]/g, ''));
  }

  private generateControllerInterface(moduleName: string, controller: PostmanController): string {
    const interfaceName = this.generateInterfaceName(moduleName, controller.name, 'Controller');
    const methods: string[] = [];

    const endpoints = controller.item;
    const hasSearch = endpoints.some(
      (ep: PostmanRequest) => ep.request.method === 'POST' && ep.name.toLowerCase().includes('search')
    );
    const hasGet = endpoints.some(
      (ep: PostmanRequest) =>
        ep.request.method === 'GET' && (ep.name.toLowerCase() === 'get' || ep.request.url.path.includes('get'))
    );
    const hasAdd = endpoints.some(
      (ep: PostmanRequest) => ep.request.method === 'POST' && ep.name.toLowerCase() === 'add'
    );
    const hasUpdate = endpoints.some(
      (ep: PostmanRequest) => ep.request.method === 'POST' && ep.name.toLowerCase() === 'update'
    );
    const hasDelete = endpoints.some(
      (ep: PostmanRequest) =>
        ep.request.method === 'POST' && (ep.name.toLowerCase() === 'del' || ep.name.toLowerCase() === 'delete')
    );
    const hasToggle = endpoints.some(
      (ep: PostmanRequest) => ep.request.method === 'POST' && ep.name.toLowerCase() === 'toggle'
    );

    endpoints.forEach((endpoint: PostmanRequest) => {
      const methodName = this.toCamelCase(endpoint.name.replace(/\s+/g, ''));
      const method = endpoint.request.method;
      const params = this.extractParametersFromPath(endpoint.request.url.path);

      let signature = `  ${methodName}`;

      const paramList: string[] = [];
      if (params.includes('uuid')) {
        paramList.push('uuid: string');
      }
      if (params.includes('enabled')) {
        paramList.push('enabled?: boolean');
      }
      if (method === 'POST' && !['status', 'start', 'stop', 'restart', 'reconfigure'].includes(methodName)) {
        if (endpoint.name.toLowerCase().includes('search')) {
          paramList.push('params?: Record<string, any>');
        } else if (!params.length || params.includes('uuid')) {
          paramList.push('data?: Record<string, any>');
        }
      }

      signature += `(${paramList.join(', ')})`;

      if (method === 'GET' && methodName.includes('status')) {
        signature += ': Promise<ApiResponse<ServiceStatus>>';
      } else if (method === 'POST' && ['start', 'stop', 'restart', 'reconfigure'].includes(methodName)) {
        signature += ': Promise<ApiResponse<ServiceControl>>';
      } else if (endpoint.name.toLowerCase().includes('search')) {
        signature += ': Promise<ApiResponse<SearchResult>>';
      } else if (method === 'GET') {
        signature += ': Promise<ApiResponse<any>>';
      } else {
        signature += ': Promise<ApiResponse<ApiResult>>';
      }

      signature += ';';

      if (endpoint.request.description) {
        methods.push(`  /** ${endpoint.request.description} */`);
      }
      methods.push(signature);
    });

    return `export interface ${interfaceName} {
${methods.join('\n')}
}`;
  }

  private generateModuleTypes(moduleName: string, module: PostmanModule, isPlugin: boolean = false): string {
    const pascalModuleName = this.toPascalCase(moduleName);
    const interfaces: string[] = [];
    const imports = `import type {
      ApiResponse,
      ApiResult,
      SearchResult,
      BaseRecord,
      ServiceStatus,
      ServiceControl,
      ConfigTest,
      CrudOperations,
      ServiceOperations,
      SettingsOperations
    } from './common';`;

    module.item.forEach((controller: PostmanController) => {
      interfaces.push(this.generateControllerInterface(moduleName, controller));
    });

    const controllerProperties = module.item.map((controller: PostmanController) => {
      const propName = this.toCamelCase(controller.name);
      const interfaceName = this.generateInterfaceName(moduleName, controller.name, 'Controller');
      return `  ${propName}: ${interfaceName};`;
    });

    const mainInterface = `export interface ${pascalModuleName}Module {
${controllerProperties.join('\n')}
}`;

    const recordInterfaces: string[] = [];

    const hasItems = module.item.some((controller: PostmanController) =>
      controller.item.some(
        (endpoint: PostmanRequest) =>
          endpoint.name.toLowerCase().includes('add') ||
          endpoint.name.toLowerCase().includes('update') ||
          endpoint.name.toLowerCase().includes('delete')
      )
    );

    if (hasItems) {
      recordInterfaces.push(`export interface ${pascalModuleName}Record extends BaseRecord {
 
  [key: string]: any;
}`);
    }

    return [
      imports,
      '',
      '// Controller interfaces',
      ...interfaces,
      '',
      '// Main module interface',
      mainInterface,
      '',
      '// Record interfaces',
      ...recordInterfaces,
    ].join('\n');
  }

  private ensureTypesDirectory(): void {
    if (!existsSync(this.typesDir)) {
      mkdirSync(this.typesDir, { recursive: true });
    }
  }

  private generateIndexFile(coreModules: string[], pluginModules: string[]): void {
    const exports: string[] = [];

    exports.push("export * from './common';");
    exports.push('');

    exports.push('// Core module types');
    coreModules.forEach((module: string) => {
      exports.push(`export * from './${module.toLowerCase()}';`);
    });

    exports.push('');
    exports.push('// Plugin module types');
    pluginModules.forEach((module: string) => {
      exports.push(`export * from './${module.toLowerCase()}';`);
    });

    const indexContent = exports.join('\n') + '\n';
    writeFileSync(join(this.typesDir, 'index.d.ts'), indexContent, 'utf-8');
  }

  public generateAllTypes(): void {
    console.log('🚀 Starting TypeScript type generation...');
    this.ensureTypesDirectory();

    console.log('📝 Generating common types...');
    const commonTypes = this.generateCommonTypes();
    writeFileSync(join(this.typesDir, 'common.d.ts'), commonTypes, 'utf-8');

    const coreCollection = this.loadCollection(this.coreCollection);
    const pluginsCollection = this.loadCollection(this.pluginsCollection);

    const coreModules: string[] = [];
    const pluginModules: string[] = [];

    console.log('🔧 Generating core module types...');
    coreCollection.item.forEach((module: PostmanModule) => {
      const moduleName = module.name.toLowerCase();
      console.log(`  ✅ ${module.name}`);

      const typeContent = this.generateModuleTypes(moduleName, module, false);
      writeFileSync(join(this.typesDir, `${moduleName}.d.ts`), typeContent, 'utf-8');
      coreModules.push(module.name);
    });

    console.log('🔌 Generating plugin module types...');
    pluginsCollection.item.forEach((module: PostmanModule) => {
      const moduleName = module.name.toLowerCase();
      console.log(`  ✅ ${module.name}`);

      const typeContent = this.generateModuleTypes(moduleName, module, true);
      writeFileSync(join(this.typesDir, `${moduleName}.d.ts`), typeContent, 'utf-8');
      pluginModules.push(module.name);
    });

    console.log('📋 Generating index file...');
    this.generateIndexFile(coreModules, pluginModules);

    console.log('\n' + '='.repeat(60));
    console.log('📊 TYPE GENERATION REPORT');
    console.log('='.repeat(60));
    console.log(`📁 Core Modules: ${coreModules.length}`);
    console.log(`🔌 Plugin Modules: ${pluginModules.length}`);
    console.log(`📄 Total Files: ${coreModules.length + pluginModules.length + 2}`);
    console.log('\n✅ All TypeScript type definitions generated successfully!');
    console.log(`📂 Location: ${this.typesDir}`);
  }
}

// Main execution
async function main() {
  const generator = new TypeGenerator();
  generator.generateAllTypes();
}

// Run the script
main().catch(console.error);
