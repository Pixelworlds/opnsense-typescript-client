#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the storage directory
const storageDir = path.join(__dirname, '../crawler/storage/key_value_stores/opnsense-api-modules');
const outputDir = path.join(__dirname, '../docs');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper function to convert snake_case to Title Case
function toTitleCase(str) {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Helper function to generate markdown table
function generateEndpointTable(endpoints) {
  let table = '| Controller | Command | Method | Parameters | Description |\n';
  table += '|------------|---------|--------|------------|-------------|\n';

  for (const endpoint of endpoints) {
    const params = endpoint.parameters || '-';
    const description = endpoint.description || '-';
    table += `| ${endpoint.controller} | ${endpoint.command} | ${endpoint.method} | ${params} | ${description} |\n`;
  }

  return table;
}

// Helper function to generate model fields table
function generateModelFieldsTable(fields) {
  let table = '| Field ID | Type | Required | Constraints | Description |\n';
  table += '|----------|------|----------|-------------|-------------|\n';

  for (const [fieldId, field] of Object.entries(fields)) {
    const required = field.required ? 'Yes' : 'No';
    let constraints = '-';

    if (field.constraints) {
      const constraintParts = [];
      if (field.constraints.options) {
        constraintParts.push(`Options: ${field.constraints.options.join(', ')}`);
      }
      if (field.constraints.minLength !== undefined) {
        constraintParts.push(`Min Length: ${field.constraints.minLength}`);
      }
      if (field.constraints.maxLength !== undefined) {
        constraintParts.push(`Max Length: ${field.constraints.maxLength}`);
      }
      constraints = constraintParts.join('; ') || '-';
    }

    table += `| ${fieldId} | ${field.type || '-'} | ${required} | ${constraints} | ${field.description || '-'} |\n`;
  }

  return table;
}

// Main function
async function main() {
  // Read all JSON files from storage
  const files = fs.readdirSync(storageDir).filter(file => file.endsWith('.json'));

  // Load and filter plugin modules
  const pluginModules = [];

  for (const file of files) {
    try {
      const filePath = path.join(storageDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const moduleData = JSON.parse(content);

      // Only include plugin modules
      if (moduleData && moduleData.type === 'plugin') {
        pluginModules.push(moduleData);
      }
    } catch (error) {
      console.warn(`Failed to read ${file}:`, error.message);
    }
  }

  // Sort modules alphabetically
  pluginModules.sort((a, b) => a.name.localeCompare(b.name));

  console.log(`Found ${pluginModules.length} plugin modules`);

  // Generate markdown content
  let markdown = '# OPNsense Plugin Modules API Documentation\n\n';

  // Add generation timestamp

  // Add overview
  markdown += '## Overview\n\n';
  markdown += `This documentation covers the Plugin modules of the OPNsense API. There are ${
    pluginModules.length
  } plugin modules with a total of ${pluginModules.reduce((sum, m) => sum + m.endpoints.length, 0)} endpoints.\n\n`;

  // Add table of contents
  markdown += '## Table of Contents\n\n';
  for (const module of pluginModules) {
    markdown += `- [${toTitleCase(module.name)}](#${module.name})\n`;
  }
  markdown += '\n';

  // Add module sections
  for (const module of pluginModules) {
    markdown += `## ${module.name}\n\n`;

    // Module info
    markdown += `**Module:** ${module.name}  \n`;
    markdown += `**Type:** ${module.type}  \n`;
    markdown += `**Endpoints:** ${module.endpoints.length}  \n`;

    if (module.modelUrl) {
      markdown += `**Model URL:** [${module.modelUrl}](${module.modelUrl})  \n`;
    }

    markdown += '\n';

    // Endpoints table
    markdown += '### Endpoints\n\n';
    markdown += generateEndpointTable(module.endpoints);
    markdown += '\n';

    // Model structure if available
    if (module.modelStructure) {
      markdown += '### Model Structure\n\n';

      // Fields
      if (module.modelStructure.fields && Object.keys(module.modelStructure.fields).length > 0) {
        markdown += '#### Fields\n\n';
        markdown += generateModelFieldsTable(module.modelStructure.fields);
        markdown += '\n';
      }

      // Containers
      if (module.modelStructure.containers && Object.keys(module.modelStructure.containers).length > 0) {
        markdown += '#### Containers\n\n';

        for (const [containerName, container] of Object.entries(module.modelStructure.containers)) {
          markdown += `**${containerName}**\n\n`;

          if (container.fields && Object.keys(container.fields).length > 0) {
            markdown += generateModelFieldsTable(container.fields);
          } else {
            markdown += '*No fields defined*\n';
          }

          markdown += '\n';
        }
      }
    }

    markdown += '---\n\n';
  }

  // Add statistics section
  markdown += '## Statistics\n\n';
  markdown += '| Metric | Value |\n';
  markdown += '|--------|-------|\n';
  markdown += `| Total Plugin Modules | ${pluginModules.length} |\n`;
  markdown += `| Total Endpoints | ${pluginModules.reduce((sum, m) => sum + m.endpoints.length, 0)} |\n`;
  markdown += `| Modules with XML Models | ${pluginModules.filter(m => m.modelUrl).length} |\n`;
  markdown += '\n';

  // Write to file
  const outputPath = path.join(outputDir, 'PLUGINS.md');
  fs.writeFileSync(outputPath, markdown, 'utf-8');

  console.log(`\nPlugin documentation generated successfully!`);
  console.log(`Output: ${outputPath}`);
}

// Run the script
main().catch(console.error);
