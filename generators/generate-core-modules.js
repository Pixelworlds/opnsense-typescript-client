#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the storage directory (updated for new location)
const storageDir = path.join(__dirname, '../crawler/storage/key_value_stores/opnsense-api-modules');
const outputDir = path.join(__dirname, '../typescript/core');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper function to convert snake_case to camelCase
function toCamelCase(str) {
  return str.replace(/_([a-z])/g, g => g[1].toUpperCase());
}

// Helper function to convert snake_case to PascalCase
function toPascalCase(str) {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

// Helper function to generate method name from controller and command
function generateMethodName(controller, command) {
  // Special cases for methods that start with underscore
  if (command.startsWith('_')) {
    command = command.substring(1);
  }

  // If controller and command are the same, just use command
  if (controller === command) {
    return toCamelCase(command);
  }

  // Otherwise combine them
  return toCamelCase(`${controller}_${command}`);
}

// Helper function to parse parameters from string
function parseParameters(paramStr) {
  if (!paramStr || paramStr === '-') return [];

  // Remove $ prefix and split by comma
  const params = paramStr.split(',').map(p => p.trim());
  const result = [];

  for (const param of params) {
    if (param.startsWith('$')) {
      const parts = param.substring(1).split('=');
      const name = parts[0];
      const defaultValue = parts[1] || null;
      const isOptional = defaultValue !== null;

      result.push({
        name: toCamelCase(name),
        originalName: name,
        type: 'string', // Default to string, could be enhanced
        optional: isOptional,
        defaultValue,
      });
    }
  }

  return result;
}

// Generate TypeScript types for a module
function generateTypeScriptTypes(module) {
  const interfacePrefix = toPascalCase(module.name);
  let typesContent = `// Type definitions for ${module.name} module\n\n`;

  // Generate common types from model structure
  if (module.modelStructure && module.modelStructure.fields) {
    typesContent += `// Model field types\n`;

    for (const [fieldId, field] of Object.entries(module.modelStructure.fields)) {
      if (field.constraints && field.constraints.options) {
        const typeName = toPascalCase(fieldId) + 'Type';
        typesContent += `export type ${interfacePrefix}${typeName} = ${field.constraints.options
          .map(opt => `'${opt}'`)
          .join(' | ')};\n`;
      }
    }
    typesContent += '\n';
  }

  // Group endpoints by controller
  const controllerGroups = {};
  for (const endpoint of module.endpoints) {
    if (!controllerGroups[endpoint.controller]) {
      controllerGroups[endpoint.controller] = [];
    }
    controllerGroups[endpoint.controller].push(endpoint);
  }

  // Generate request/response types for each endpoint
  for (const [controller, endpoints] of Object.entries(controllerGroups)) {
    typesContent += `// ${toPascalCase(controller)} types\n`;

    for (const endpoint of endpoints) {
      const typePrefix = `${interfacePrefix}${toPascalCase(controller)}${toPascalCase(endpoint.command)}`;

      // Generate request type for POST endpoints
      if (endpoint.method === 'POST') {
        typesContent += `export interface ${typePrefix}Request {\n`;

        // Add fields from model structure if available
        if (module.modelStructure && endpoint.modelParameters) {
          for (const param of endpoint.modelParameters) {
            const required = param.required ? '' : '?';
            typesContent += `  ${toCamelCase(param.id)}${required}: ${
              param.type === 'IntegerField' ? 'number' : param.type === 'BooleanField' ? 'boolean' : 'string'
            };\n`;
          }
        } else {
          typesContent += `  [key: string]: any; // TODO: Define specific fields\n`;
        }

        typesContent += `}\n\n`;
      }

      // Generate response type
      typesContent += `export interface ${typePrefix}Response {\n`;
      typesContent += `  result?: string;\n`;
      typesContent += `  status?: string;\n`;
      typesContent += `  message?: string;\n`;
      typesContent += `  [key: string]: any; // TODO: Define specific response fields\n`;
      typesContent += `}\n\n`;
    }
  }

  // Add container types if any
  if (module.modelStructure && module.modelStructure.containers) {
    typesContent += `// Container types\n`;

    for (const [containerName, container] of Object.entries(module.modelStructure.containers)) {
      const containerType = `${interfacePrefix}${toPascalCase(containerName)}`;
      typesContent += `export interface ${containerType} {\n`;

      if (container.fields) {
        for (const [fieldId, field] of Object.entries(container.fields)) {
          const required = field.required ? '' : '?';
          const fieldType =
            field.type === 'IntegerField' ? 'number' : field.type === 'BooleanField' ? 'boolean' : 'string';
          typesContent += `  ${toCamelCase(fieldId)}${required}: ${fieldType};\n`;
        }
      }

      typesContent += `}\n\n`;
    }
  }

  return typesContent;
}

// Generate TypeScript class for a module
function generateTypeScriptClass(module) {
  const className = `${toPascalCase(module.name)}Api`;
  const interfacePrefix = toPascalCase(module.name);

  // Start with imports and types
  let classContent = `import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

`;

  // Add types
  classContent += generateTypeScriptTypes(module);

  // Add class definition
  classContent += `export class ${className} {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/${module.name.toLowerCase()}';
  }
`;

  // Group endpoints by controller
  const controllerGroups = {};
  for (const endpoint of module.endpoints) {
    if (!controllerGroups[endpoint.controller]) {
      controllerGroups[endpoint.controller] = [];
    }
    controllerGroups[endpoint.controller].push(endpoint);
  }

  // Generate methods for each endpoint
  for (const [controller, endpoints] of Object.entries(controllerGroups)) {
    classContent += `\n  // ${toPascalCase(controller)} methods\n`;

    for (const endpoint of endpoints) {
      const methodName = generateMethodName(controller, endpoint.command);
      const params = parseParameters(endpoint.parameters);
      const hasBody = endpoint.method === 'POST';

      // Generate method signature
      let methodParams = [];
      let pathParams = [];

      // Add path parameters
      for (const param of params) {
        methodParams.push(`${param.name}${param.optional ? '?' : ''}: string`);
        pathParams.push(param);
      }

      // Add body parameter for POST requests
      if (hasBody) {
        const bodyType = `${interfacePrefix}${toPascalCase(controller)}${toPascalCase(endpoint.command)}Request`;
        methodParams.push(`data?: ${bodyType}`);
      }

      // Add config parameter
      methodParams.push('config?: AxiosRequestConfig');

      // Generate path with parameters
      let pathStr = `\`\${this.basePath}/${controller}/${endpoint.command}`;
      for (const param of pathParams) {
        pathStr += `/\${${param.name}}`;
      }
      pathStr += '`';

      // Generate method
      classContent += `  async ${methodName}(${methodParams.join(
        ', '
      )}): Promise<AxiosResponse<${interfacePrefix}${toPascalCase(controller)}${toPascalCase(
        endpoint.command
      )}Response>> {\n`;

      if (endpoint.method === 'GET') {
        classContent += `    return this.client.get(${pathStr}, config);\n`;
      } else if (endpoint.method === 'POST') {
        classContent += `    return this.client.post(${pathStr}, data, config);\n`;
      }

      classContent += `  }\n\n`;
    }
  }

  classContent += `}\n`;

  return classContent;
}

// Main function
async function main() {
  // Read all JSON files from storage
  const files = fs.readdirSync(storageDir).filter(file => file.endsWith('.json'));

  // Load and filter core modules
  const coreModules = [];

  for (const file of files) {
    try {
      const filePath = path.join(storageDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const moduleData = JSON.parse(content);

      // Only include core modules
      if (moduleData && moduleData.type === 'core') {
        coreModules.push(moduleData);
      }
    } catch (error) {
      console.warn(`Failed to read ${file}:`, error.message);
    }
  }

  console.log(`Found ${coreModules.length} core modules`);

  // Generate TypeScript files for each module
  for (const module of coreModules) {
    const moduleName = module.name.toLowerCase();

    // Generate class file with embedded types
    const classContent = generateTypeScriptClass(module);
    const classFile = path.join(outputDir, `${moduleName}.ts`);
    fs.writeFileSync(classFile, classContent, 'utf-8');

    console.log(`Generated ${moduleName} module: ${classFile}`);
  }

  console.log(`\nSuccessfully generated ${coreModules.length} core modules in ${outputDir}`);
}

// Run the script
main().catch(console.error);
