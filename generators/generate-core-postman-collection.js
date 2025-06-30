#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the storage directory (updated for new location)
const storageDir = path.join(__dirname, '../crawler/storage/key_value_stores/opnsense-api-modules');

// Helper function to convert snake_case to Title Case
function toTitleCase(str) {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Helper function to parse parameters and convert to Postman path variables
function parseUrlParameters(url) {
  // Replace {param} with :param for Postman path variables
  const pathVariableRegex = /\{([a-zA-Z_]+)\}/g;
  const convertedUrl = url.replace(pathVariableRegex, ':$1');

  // Extract path variables
  const pathVariables = [];
  let match;
  while ((match = pathVariableRegex.exec(url)) !== null) {
    pathVariables.push({
      key: match[1],
      value: '',
      description: `Path parameter: ${match[1]}`,
    });
  }

  return { convertedUrl, pathVariables };
}

// Helper function to build Postman URL object
function buildPostmanUrl(endpoint, baseUrl = '{{opnsense_base_url}}') {
  const { convertedUrl, pathVariables } = parseUrlParameters(endpoint.url);

  // Remove /api prefix if present
  const cleanUrl = convertedUrl.startsWith('/api/') ? convertedUrl.substring(4) : convertedUrl;

  // Build path array
  const pathParts = cleanUrl.split('/').filter(part => part);

  // Build URL object
  const urlObject = {
    raw: `${baseUrl}${cleanUrl}`,
    host: [baseUrl],
    path: pathParts,
  };

  // Add variables if any path variables exist
  if (pathVariables.length > 0) {
    urlObject.variable = pathVariables;
  }

  return urlObject;
}

// Helper function to create a Postman request
function createPostmanRequest(endpoint, module, controller) {
  const request = {
    name: endpoint.command || 'Unknown Command',
    request: {
      method: endpoint.method,
      header: [],
      url: buildPostmanUrl(endpoint),
      description: endpoint.description || `${endpoint.method} ${endpoint.url}`,
    },
  };

  // Add body for POST requests
  if (endpoint.method === 'POST') {
    request.request.body = {
      mode: 'raw',
      raw: JSON.stringify(
        {
          // Add placeholder fields from model if available
          '// TODO': 'Add request body fields',
        },
        null,
        2
      ),
      options: {
        raw: {
          language: 'json',
        },
      },
    };

    request.request.header.push({
      key: 'Content-Type',
      value: 'application/json',
    });
  }

  return request;
}

// Helper function to create a folder for a controller
function createControllerFolder(controller, endpoints, module) {
  return {
    name: toTitleCase(controller),
    item: endpoints.map(endpoint => createPostmanRequest(endpoint, module, controller)),
  };
}

// Helper function to create a folder for a module
function createModuleFolder(module) {
  // Group endpoints by controller
  const controllerGroups = {};

  for (const endpoint of module.endpoints) {
    if (!controllerGroups[endpoint.controller]) {
      controllerGroups[endpoint.controller] = [];
    }
    controllerGroups[endpoint.controller].push(endpoint);
  }

  // Create controller folders
  const items = [];
  for (const [controller, endpoints] of Object.entries(controllerGroups)) {
    items.push(createControllerFolder(controller, endpoints, module));
  }

  return {
    name: toTitleCase(module.name),
    description: `API endpoints for ${module.name} module`,
    item: items,
  };
}

// Main function to generate Postman collection
async function generatePostmanCollection() {
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

  // Sort modules alphabetically
  coreModules.sort((a, b) => a.name.localeCompare(b.name));

  // Create module folders
  const moduleFolders = coreModules.map(module => createModuleFolder(module));

  // Create Postman collection
  const collection = {
    info: {
      name: 'OPNsense Core Modules API',
      description: 'Complete API collection for OPNsense Core Modules',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
      _postman_id: generateUuid(),
      version: '1.0.0',
    },
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
          value: '{{opnsense_secret_key}}',
          type: 'string',
        },
      ],
    },
    item: moduleFolders,
    variable: [
      {
        key: 'opnsense_base_url',
        value: 'https://your-opnsense-host/api',
        type: 'string',
        description: 'Base URL for OPNsense API (e.g., https://192.168.1.1/api)',
      },
      {
        key: 'opnsense_api_key',
        value: 'your-api-key',
        type: 'string',
        description: 'OPNsense API key',
      },
      {
        key: 'opnsense_secret_key',
        value: 'your-secret-key',
        type: 'string',
        description: 'OPNsense API secret',
      },
    ],
  };

  // Add statistics to description
  const totalEndpoints = coreModules.reduce((sum, module) => sum + module.endpoints.length, 0);
  collection.info.description += `\n\nStatistics:\n- Core Modules: ${coreModules.length}\n- Total Endpoints: ${totalEndpoints}`;

  // Write collection to file (updated path)
  const outputPath = path.join(__dirname, '../postman/OPNsense_Core_Modules_API_Collection.postman_collection.json');

  // Ensure postman directory exists
  const postmanDir = path.join(__dirname, '../postman');
  if (!fs.existsSync(postmanDir)) {
    fs.mkdirSync(postmanDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(collection, null, 2), 'utf-8');

  console.log(`\nPostman collection generated successfully!`);
  console.log(`Output: ${outputPath}`);
  console.log(`Statistics:`);
  console.log(`   - Core Modules: ${coreModules.length}`);
  console.log(`   - Total Endpoints: ${totalEndpoints}`);

  // Print module summary
  console.log(`\nCore Modules Included:`);
  for (const module of coreModules) {
    console.log(`   - ${module.name}: ${module.endpoints.length} endpoints`);
  }
}

// Helper function to generate UUID for Postman
function generateUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Run the script
generatePostmanCollection().catch(console.error);
