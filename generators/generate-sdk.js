#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * OPNsense TypeScript SDK Generator
 *
 * Transforms TypeScript modules from the typescript/ folder into a proper SDK structure
 * in the src/ folder based on build-config.json configuration.
 */

class OPNsenseSDKGenerator {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.typescriptDir = path.join(this.projectRoot, 'typescript');
    this.srcDir = path.join(this.projectRoot, 'src');
    this.buildConfig = this.loadBuildConfig();

    // Required modules that are always included
    this.requiredModules = new Set(['core', 'auth', 'firewall', 'interfaces']);
  }

  /**
   * Load build configuration
   */
  loadBuildConfig() {
    const configPath = path.join(this.srcDir, 'build-config.json');
    if (!fs.existsSync(configPath)) {
      throw new Error(`Build configuration not found at ${configPath}`);
    }

    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    console.log(
      `Loaded build configuration with ${Object.keys(config.modules.core).length} core and ${
        Object.keys(config.modules.plugins).length
      } plugin modules`
    );
    return config;
  }

  /**
   * Get list of modules to include based on build config
   */
  getIncludedModules() {
    const included = {
      core: [],
      plugins: [],
    };

    // Process core modules
    for (const [moduleName, config] of Object.entries(this.buildConfig.modules.core)) {
      if (config.include || this.requiredModules.has(moduleName)) {
        included.core.push(moduleName);
      }
    }

    // Process plugin modules
    for (const [moduleName, config] of Object.entries(this.buildConfig.modules.plugins)) {
      if (config.include) {
        included.plugins.push(moduleName);
      }
    }

    // Always include required modules even if not in config
    for (const required of this.requiredModules) {
      if (!included.core.includes(required)) {
        included.core.push(required);
      }
    }

    console.log(`Including ${included.core.length} core modules and ${included.plugins.length} plugin modules`);
    return included;
  }

  /**
   * Clean and prepare src directory
   */
  prepareSrcDirectory() {
    // Remove existing src content except build-config.json
    if (fs.existsSync(this.srcDir)) {
      const files = fs.readdirSync(this.srcDir);
      for (const file of files) {
        if (file !== 'build-config.json') {
          const filePath = path.join(this.srcDir, file);
          if (fs.statSync(filePath).isDirectory()) {
            fs.rmSync(filePath, { recursive: true });
          } else {
            fs.unlinkSync(filePath);
          }
        }
      }
    } else {
      fs.mkdirSync(this.srcDir, { recursive: true });
    }

    // Create core and plugins directories
    fs.mkdirSync(path.join(this.srcDir, 'core'), { recursive: true });
    fs.mkdirSync(path.join(this.srcDir, 'plugins'), { recursive: true });

    console.log('Cleaned and prepared src directory');
  }

  /**
   * Transform TypeScript module for SDK
   */
  transformModule(sourceFile, targetFile, moduleName, moduleType) {
    const content = fs.readFileSync(sourceFile, 'utf8');

    // Remove axios import since we'll use a shared HTTP client
    let transformedContent = content.replace(/import axios from 'axios';\s*\n/, '');

    // Replace AxiosInstance type with generic HttpClient type
    transformedContent = transformedContent.replace(
      /import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';/,
      `import type { HttpClient, RequestConfig, ApiResponse } from '../types';`
    );

    // Replace AxiosInstance with HttpClient
    transformedContent = transformedContent.replace(/AxiosInstance/g, 'HttpClient');
    transformedContent = transformedContent.replace(/AxiosRequestConfig/g, 'RequestConfig');
    transformedContent = transformedContent.replace(/AxiosResponse/g, 'ApiResponse');

    // Replace constructor and class properties
    const className = this.getClassName(moduleName);
    transformedContent = transformedContent.replace(
      new RegExp(
        `export class ${className} {\n  private client: HttpClient;\n  private basePath: string;\n\n  constructor\\(client: HttpClient\\) {\n    this\\.client = client;\n    this\\.basePath = '/api/${moduleName}';`
      ),
      `export class ${className} {
  constructor(private http: HttpClient) {
    // HTTP client will handle full URLs with base path`
    );

    // Replace this.client with this.http
    transformedContent = transformedContent.replace(/this\.client\./g, 'this.http.');

    // Replace basePath usage with direct API paths
    transformedContent = transformedContent.replace(new RegExp(`\\$\\{this\\.basePath\\}`, 'g'), `/api/${moduleName}`);

    // Fix reserved keyword parameters - replace 'if' with 'interfaceName'
    transformedContent = transformedContent.replace(/async (\w+)\(if\?: string,/g, 'async $1(interfaceName?: string,');

    // Fix the usage in URL template literals
    transformedContent = transformedContent.replace(/\$\{if\}/g, '${interfaceName}');

    fs.writeFileSync(targetFile, transformedContent);
  }

  /**
   * Get expected class name for module
   */
  getClassName(moduleName) {
    return moduleName.charAt(0).toUpperCase() + moduleName.slice(1) + 'Api';
  }

  /**
   * Copy and transform modules
   */
  copyModules() {
    const included = this.getIncludedModules();
    let copiedCount = 0;

    // Copy core modules
    for (const moduleName of included.core) {
      const sourceFile = path.join(this.typescriptDir, 'core', `${moduleName}.ts`);
      const targetFile = path.join(this.srcDir, 'core', `${moduleName}.ts`);

      if (fs.existsSync(sourceFile)) {
        this.transformModule(sourceFile, targetFile, moduleName, 'core');
        copiedCount++;
      } else {
        console.warn(`Warning: Core module ${moduleName} not found at ${sourceFile}`);
      }
    }

    // Copy plugin modules
    for (const moduleName of included.plugins) {
      const sourceFile = path.join(this.typescriptDir, 'plugins', `${moduleName}.ts`);
      const targetFile = path.join(this.srcDir, 'plugins', `${moduleName}.ts`);

      if (fs.existsSync(sourceFile)) {
        this.transformModule(sourceFile, targetFile, moduleName, 'plugins');
        copiedCount++;
      } else {
        console.warn(`Warning: Plugin module ${moduleName} not found at ${sourceFile}`);
      }
    }

    console.log(`Copied and transformed ${copiedCount} modules`);
    return included;
  }

  /**
   * Copy keygen utility
   */
  copyKeygen() {
    const sourceFile = path.join(this.typescriptDir, 'utilities', 'keygen.ts');
    const targetFile = path.join(this.srcDir, 'keygen.ts');

    if (fs.existsSync(sourceFile)) {
      fs.copyFileSync(sourceFile, targetFile);
      console.log('Copied keygen utility');
    } else {
      console.warn('Warning: Keygen utility not found');
    }
  }

  /**
   * Generate shared types
   */
  generateTypes() {
    const typesContent = `// Shared types for OPNsense TypeScript SDK

export interface HttpClient {
  get<T = any>(url: string, config?: RequestConfig): Promise<ApiResponse<T>>;
  post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>>;
  put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>>;
  delete<T = any>(url: string, config?: RequestConfig): Promise<ApiResponse<T>>;
  patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>>;
}

export interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
  [key: string]: any;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface OPNsenseConfig {
  baseUrl: string;
  apiKey: string;
  apiSecret: string;
  verifySsl?: boolean;
  timeout?: number;
}

export interface ApiResult {
  result: string;
  status?: string;
  message?: string;
  [key: string]: any;
}
`;

    fs.writeFileSync(path.join(this.srcDir, 'types.ts'), typesContent);
    console.log('Generated shared types');
  }

  /**
   * Generate HTTP client
   */
  generateHttpClient() {
    const httpClientContent = `import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import * as https from 'https';
import type { HttpClient, RequestConfig, ApiResponse, OPNsenseConfig } from './types';

export class OPNsenseHttpClient implements HttpClient {
  private client: AxiosInstance;

  constructor(config: OPNsenseConfig) {
    // Remove trailing slash from baseUrl - individual modules already include /api prefix
    const baseUrl = config.baseUrl.replace(/\\/$/, '');
    
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: config.timeout || 30000,
      auth: {
        username: config.apiKey,
        password: config.apiSecret,
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: config.verifySsl !== false,
      }),
      headers: {
        'Accept': 'application/json',
      },
    });
  }

  async get<T = any>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await this.client.get(url, config);
    return this.transformResponse(response);
  }

  async post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    const requestConfig = data ? {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    } : config;
    const response: AxiosResponse<T> = await this.client.post(url, data, requestConfig);
    return this.transformResponse(response);
  }

  async put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    const requestConfig = data ? {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    } : config;
    const response: AxiosResponse<T> = await this.client.put(url, data, requestConfig);
    return this.transformResponse(response);
  }

  async delete<T = any>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await this.client.delete(url, config);
    return this.transformResponse(response);
  }

  async patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    const requestConfig = data ? {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    } : config;
    const response: AxiosResponse<T> = await this.client.patch(url, data, requestConfig);
    return this.transformResponse(response);
  }

  private transformResponse<T>(response: AxiosResponse<T>): ApiResponse<T> {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as Record<string, string>,
    };
  }
}
`;

    fs.writeFileSync(path.join(this.srcDir, 'http-client.ts'), httpClientContent);
    console.log('Generated HTTP client');
  }

  /**
   * Generate core index file
   */
  generateCoreIndex(includedModules) {
    const exports = includedModules.core
      .map(moduleName => {
        const className = this.getClassName(moduleName);
        return `export { ${className} } from './${moduleName}';`;
      })
      .join('\n');

    fs.writeFileSync(path.join(this.srcDir, 'core', 'index.ts'), exports);
    console.log('Generated core/index.ts');
  }

  /**
   * Generate plugins index file
   */
  generatePluginsIndex(includedModules) {
    const exports = includedModules.plugins
      .map(moduleName => {
        const className = this.getClassName(moduleName);
        return `export { ${className} } from './${moduleName}';`;
      })
      .join('\n');

    fs.writeFileSync(path.join(this.srcDir, 'plugins', 'index.ts'), exports);
    console.log('Generated plugins/index.ts');
  }

  /**
   * Generate main index file and OPNsense client class
   */
  generateMainIndex(includedModules) {
    // Handle naming conflicts by aliasing plugin modules with Plugin suffix
    const coreImports = includedModules.core.map(moduleName => this.getClassName(moduleName)).join(', ');

    const pluginImports = includedModules.plugins
      .map(moduleName => {
        const className = this.getClassName(moduleName);
        // Check for naming conflicts with core modules
        const hasConflict = includedModules.core.some(coreModule => this.getClassName(coreModule) === className);
        return hasConflict ? `${className} as ${className}Plugin` : className;
      })
      .join(', ');

    const coreProperties = includedModules.core
      .map(moduleName => {
        const className = this.getClassName(moduleName);
        return `  public readonly ${moduleName}: ${className};`;
      })
      .join('\n');

    const pluginProperties = includedModules.plugins
      .map(moduleName => {
        const className = this.getClassName(moduleName);
        const hasConflict = includedModules.core.some(coreModule => this.getClassName(coreModule) === className);
        const finalClassName = hasConflict ? `${className}Plugin` : className;
        return `    ${moduleName}: ${finalClassName};`;
      })
      .join('\n');

    const coreInitializers = includedModules.core
      .map(moduleName => {
        const className = this.getClassName(moduleName);
        return `    this.${moduleName} = new ${className}(this.http);`;
      })
      .join('\n');

    const pluginInitializers = includedModules.plugins
      .map(moduleName => {
        const className = this.getClassName(moduleName);
        const hasConflict = includedModules.core.some(coreModule => this.getClassName(coreModule) === className);
        const finalClassName = hasConflict ? `${className}Plugin` : className;
        return `      ${moduleName}: new ${finalClassName}(this.http),`;
      })
      .join('\n');

    const indexContent = `// OPNsense TypeScript SDK
// Auto-generated from TypeScript modules

import { OPNsenseHttpClient } from './http-client';
import type { OPNsenseConfig, HttpClient } from './types';

// Core module imports
import { ${coreImports} } from './core';

// Plugin module imports
import { ${pluginImports} } from './plugins';

// Export types
export type { OPNsenseConfig, RequestConfig, ApiResponse, ApiResult } from './types';

// Export individual modules for tree-shaking (without re-exporting to avoid conflicts)
// Use explicit imports above instead of export * to handle naming conflicts

/**
 * Main OPNsense API Client
 * 
 * Provides access to all OPNsense core and plugin modules.
 * Handles authentication, SSL verification, and request/response management.
 */
export class OPNsenseClient {
  private http: HttpClient;

  // Core modules
${coreProperties}

  // Plugin modules
  public readonly plugins: {
${pluginProperties}
  };

  /**
   * Create a new OPNsense API client
   * 
   * @param config Configuration object with connection details
   */
  constructor(config: OPNsenseConfig) {
    this.http = new OPNsenseHttpClient(config);

    // Initialize core modules
${coreInitializers}

    // Initialize plugin modules
    this.plugins = {
${pluginInitializers}
    };
  }

  /**
   * Test the connection to the OPNsense API
   */
  async testConnection() {
    try {
      await this.core.systemStatus();
      return { success: true, message: 'Connection successful' };
    } catch (error) {
      return { 
        success: false, 
        message: error instanceof Error ? error.message : 'Connection failed' 
      };
    }
  }
}

// Default export
export default OPNsenseClient;
`;

    fs.writeFileSync(path.join(this.srcDir, 'index.ts'), indexContent);
    console.log('Generated main index.ts and OPNsenseClient class');
  }

  /**
   * Generate package.json exports
   */
  updatePackageJson() {
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

      // Update main fields for the built SDK
      packageJson.main = './dist/index.js';
      packageJson.module = './dist/index.esm.js';
      packageJson.types = './dist/index.d.ts';

      // Update exports for better tree-shaking
      packageJson.exports = {
        '.': {
          require: './dist/index.js',
          import: './dist/index.esm.js',
          types: './dist/index.d.ts',
        },
        './keygen': {
          require: './dist/keygen.js',
          import: './dist/keygen.esm.js',
          types: './dist/keygen.d.ts',
        },
      };

      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log('Updated package.json exports');
    }
  }

  /**
   * Main generation process
   */
  async generate() {
    console.log('Starting OPNsense SDK generation...\n');

    try {
      // Step 1: Prepare environment
      this.prepareSrcDirectory();

      // Step 2: Copy and transform modules
      const includedModules = this.copyModules();

      // Step 3: Copy utilities
      this.copyKeygen();

      // Step 4: Generate SDK infrastructure
      this.generateTypes();
      this.generateHttpClient();

      // Step 5: Generate index files
      this.generateCoreIndex(includedModules);
      this.generatePluginsIndex(includedModules);
      this.generateMainIndex(includedModules);

      // Step 6: Update package configuration
      this.updatePackageJson();

      console.log('\\nSDK generation completed successfully!');
      console.log(
        `Generated SDK with ${includedModules.core.length} core modules and ${includedModules.plugins.length} plugin modules`
      );
      console.log('Run "npm run build" to compile the SDK');
    } catch (error) {
      console.error('SDK generation failed:', error.message);
      process.exit(1);
    }
  }
}

// Run the generator
if (import.meta.url === `file://${process.argv[1]}`) {
  const generator = new OPNsenseSDKGenerator();
  generator.generate();
}

export default OPNsenseSDKGenerator;
