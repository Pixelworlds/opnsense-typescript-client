#!/usr/bin/env bun

import fs from 'fs';
import path from 'path';

// Configuration
const CRAWLER_DATA_DIR = path.join(process.cwd(), 'crawler/storage/key_value_stores/opnsense-api-modules');
const OUTPUT_FILE = path.join(process.cwd(), 'postman/OPNsense_Plugin_Modules_API_Collection.postman_collection.json');

// Read all plugin module JSON files
function loadPluginModules() {
  const files = fs.readdirSync(CRAWLER_DATA_DIR);
  const pluginModules = [];

  files.forEach(file => {
    if (file.startsWith('plugin-') && file.endsWith('.json')) {
      const data = JSON.parse(fs.readFileSync(path.join(CRAWLER_DATA_DIR, file), 'utf8'));
      pluginModules.push(data);
    }
  });

  return pluginModules;
}

// Convert path parameters from {param} to :param format for Postman
function convertPathParameters(url) {
  let convertedUrl = url;
  const pathParams = [];

  // Find all {param} patterns and replace with :param
  const paramRegex = /\{([^}]+)\}/g;
  let match;

  while ((match = paramRegex.exec(url)) !== null) {
    const paramName = match[1];
    convertedUrl = convertedUrl.replace(`{${paramName}}`, `:${paramName}`);
    pathParams.push({
      key: paramName,
      value: `{{${paramName}}}`,
      description: `Path parameter: ${paramName}`,
    });
  }

  return { convertedUrl, pathParams };
}

// Build a Postman request object with proper URL structure
function buildPostmanRequest(endpoint) {
  const { convertedUrl, pathParams } = convertPathParameters(endpoint.url);

  // Build the request object
  const request = {
    method: endpoint.method,
    header: [],
    description: `${endpoint.method} ${endpoint.url}`,
  };

  // Add Content-Type header for POST requests
  if (endpoint.method === 'POST') {
    request.header.push({
      key: 'Content-Type',
      value: 'application/json',
      type: 'text',
    });
  }

  // Build URL object with the structure Postman expects
  // When using a base URL variable, we use this format
  request.url = {
    raw: `{{opnsense_base_url}}${convertedUrl}`,
    host: ['{{opnsense_base_url}}'],
    path: convertedUrl.substring(1).split('/'), // Remove leading slash and split
    query: [],
    variable: [],
  };

  // Add path variables if any
  if (pathParams.length > 0) {
    request.url.variable = pathParams;
  }

  // Add body for POST requests
  if (endpoint.method === 'POST' && endpoint.parameters && Object.keys(endpoint.parameters).length > 0) {
    const bodyExample = {};
    Object.entries(endpoint.parameters).forEach(([key, param]) => {
      if (param.type === 'array') {
        bodyExample[key] = [];
      } else if (param.type === 'object') {
        bodyExample[key] = {};
      } else if (param.type === 'boolean') {
        bodyExample[key] = false;
      } else if (param.type === 'number' || param.type === 'integer') {
        bodyExample[key] = 0;
      } else {
        bodyExample[key] = '';
      }
    });

    request.body = {
      mode: 'raw',
      raw: JSON.stringify(bodyExample, null, 2),
      options: {
        raw: {
          language: 'json',
        },
      },
    };
  }

  return request;
}

// Build a Postman item (folder or request)
function buildPostmanItem(module) {
  const item = {
    name: module.name,
    description: module.description || `API endpoints for ${module.name}`,
    item: [],
  };

  // Group endpoints by controller
  const controllers = {};

  module.endpoints.forEach(endpoint => {
    const parts = endpoint.url.split('/');
    // Extract controller name (usually the 4th part: /api/module/controller/action)
    const controller = parts[3] || 'default';

    if (!controllers[controller]) {
      controllers[controller] = {
        name: controller,
        item: [],
      };
    }

    const request = buildPostmanRequest(endpoint);
    controllers[controller].item.push({
      name: endpoint.url.split('/').pop() || endpoint.url,
      request: request,
      response: [],
    });
  });

  // Add controller folders to module
  Object.values(controllers).forEach(controller => {
    item.item.push(controller);
  });

  return item;
}

// Build the complete Postman collection
function buildPostmanCollection(modules) {
  return {
    info: {
      name: 'OPNsense Plugin Modules API Collection',
      description: `Auto-generated Postman collection for OPNsense Plugin API modules.

IMPORTANT: Before using this collection, you MUST configure the following variables in your Postman environment or globals:

- opnsense_base_url: Your OPNsense URL (e.g., https://192.168.1.1 or https://opnsense.local)
- opnsense_api_key: Your API key from OPNsense
- opnsense_api_secret: Your API secret from OPNsense

To create/edit an environment:
1. Click the environment dropdown (top right in Postman)
2. Select "Manage Environments"
3. Click "Add" to create a new environment
4. Add the three variables mentioned above with your actual values
5. Select your environment from the dropdown before running requests`,
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
      _postman_id: 'opnsense-plugin-api-collection',
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
          exec: [
            '// This script runs before every request in the collection',
            '// You can add any pre-request logic here if needed',
          ],
        },
      },
    ],
  };
}

// Main function
function main() {
  console.log('Loading plugin modules...');
  const modules = loadPluginModules();
  console.log(`Found ${modules.length} plugin modules`);

  console.log('Building Postman collection...');
  const collection = buildPostmanCollection(modules);

  // Add each module as a folder in the collection
  modules.forEach(module => {
    const item = buildPostmanItem(module);
    collection.item.push(item);
  });

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the collection to file
  console.log(`Writing collection to ${OUTPUT_FILE}...`);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(collection, null, 2));

  console.log('✅ Plugin Postman collection generated successfully!');
}

// Run the generator
main();
