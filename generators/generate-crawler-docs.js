#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the output directory
const outputDir = path.join(__dirname, '../crawler');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Main function
async function main() {
  // Generate markdown content
  let markdown = '# OPNsense API Crawler Documentation\n\n';

  // Add generation timestamp

  // Add overview
  markdown += '## Overview\n\n';
  markdown +=
    'The OPNsense API Crawler is an automated tool that discovers and documents the OPNsense API by scraping the official documentation pages. It extracts endpoint information, parameters, and data models from both Core and Plugin modules.\n\n';

  // Add assumptions section
  markdown += '## Assumptions\n\n';
  markdown += 'The crawler operates based on several key assumptions about the OPNsense documentation structure:\n\n';

  markdown += '### 1. URL Structure\n\n';
  markdown += 'The crawler assumes the following URL patterns:\n';
  markdown += '- **Index pages**: Documentation is organized under two main index pages:\n';
  markdown += '  - Core: `https://docs.opnsense.org/development/api/core/index.html`\n';
  markdown += '  - Plugins: `https://docs.opnsense.org/development/api/plugins/index.html`\n';
  markdown += '- **Module pages**: Individual modules follow the pattern:\n';
  markdown += '  - Core: `https://docs.opnsense.org/development/api/core/{module}.html`\n';
  markdown += '  - Plugins: `https://docs.opnsense.org/development/api/plugins/{module}.html`\n';
  markdown += '- **API endpoints**: All API URLs follow the pattern `/api/{module}/{controller}/{command}`\n\n';

  markdown += '### 2. CSS Selectors\n\n';
  markdown += 'The crawler relies on specific HTML structure and CSS selectors:\n';
  markdown += '- **Module links**: Extracted from `<a>` tags within the index pages\n';
  markdown += '- **API tables**: Located using `table` elements containing endpoint information\n';
  markdown += '- **Table structure**: Expects columns for Method, Module, Controller, Command, and Parameters\n';
  markdown += '- **GitHub links**: Searches for `<a>` tags with `href` containing "github.com" and ".xml"\n';
  markdown += '- **Code blocks**: Looks for `<code>` elements containing parameter information\n\n';

  markdown += '### 3. GitHub URL Translation\n\n';
  markdown += 'The crawler automatically converts GitHub web URLs to raw content URLs:\n';
  markdown += '- **Pattern**: `https://github.com/{owner}/{repo}/blob/{branch}/{path}`\n';
  markdown += '- **Converts to**: `https://raw.githubusercontent.com/{owner}/{repo}/{branch}/{path}`\n';
  markdown += '- **Purpose**: Enables direct fetching of XML model files for parsing\n';
  markdown += '- **Assumption**: All model files are stored in public GitHub repositories\n\n';

  markdown += '### 4. XML Model Structure\n\n';
  markdown += 'The crawler expects XML models to follow OPNsense conventions:\n';
  markdown += '- **Root element**: `<model>` containing the entire model definition\n';
  markdown += '- **Items section**: `<items>` containing field definitions\n';
  markdown += '- **Field types**: Standard OPNsense field types (TextField, IntegerField, BooleanField, etc.)\n';
  markdown += '- **Constraints**: Optional constraint definitions within field elements\n';
  markdown += '- **Containers**: Nested structures for complex data models\n\n';

  markdown += '### 5. Parameter Matching\n\n';
  markdown += 'The crawler makes assumptions about parameter formats:\n';
  markdown += '- **Parameter syntax**: Expects parameters in format `$param1,$param2` or `$uuid`\n';
  markdown += '- **UUID parameters**: Assumes `$uuid` refers to resource identifiers\n';
  markdown += '- **Path parameters**: Converts `$param` to `{param}` for URL construction\n';
  markdown += '- **Optional parameters**: Does not distinguish between required and optional parameters\n\n';

  markdown += '### 6. Documentation Consistency\n\n';
  markdown += 'The crawler assumes:\n';
  markdown += '- **Table format**: All API documentation uses consistent table structures\n';
  markdown += '- **Method types**: Only GET and POST methods are documented\n';
  markdown += '- **Module naming**: Module names in URLs match controller paths\n';
  markdown += '- **Command patterns**: Commands follow consistent naming conventions\n\n';

  markdown += '### 7. Error Handling Assumptions\n\n';
  markdown += '- **Missing models**: Not all modules have XML model definitions (this is expected)\n';
  markdown += '- **Network failures**: Implements retry logic assuming temporary failures\n';
  markdown += '- **Rate limiting**: Includes delays between requests to avoid overwhelming servers\n';
  markdown += '- **Parsing failures**: Continues crawling even if individual pages fail to parse\n\n';

  // Add how it works section
  markdown += '## How It Works\n\n';
  markdown += 'The crawler operates in four main phases:\n\n';

  markdown += '### 1. Module Discovery\n\n';
  markdown += 'The crawler starts by fetching two main index pages:\n';
  markdown += '- **Core modules**: `https://docs.opnsense.org/development/api/core/index.html`\n';
  markdown += '- **Plugin modules**: `https://docs.opnsense.org/development/api/plugins/index.html`\n\n';
  markdown += 'From these pages, it extracts links to individual module documentation pages.\n\n';

  markdown += '### 2. Endpoint Extraction\n\n';
  markdown += 'For each module page, the crawler:\n';
  markdown += '- Parses the HTML to find API endpoint tables\n';
  markdown += '- Extracts controller names, commands, HTTP methods, and parameters\n';
  markdown += '- Builds complete API URLs for each endpoint\n';
  markdown += '- Captures endpoint descriptions when available\n\n';

  markdown += '### 3. XML Model Discovery\n\n';
  markdown += 'The crawler searches for XML model definitions by:\n';
  markdown += '- Looking for links to GitHub containing `.xml` files\n';
  markdown += '- Converting GitHub URLs to raw.githubusercontent.com URLs\n';
  markdown += '- Parsing XML files to extract field definitions, types, and constraints\n';
  markdown += '- Mapping model fields to their corresponding endpoints\n\n';

  markdown += '### 4. Data Storage\n\n';
  markdown += 'All collected data is stored as JSON files in:\n';
  markdown += '`crawler/storage/key_value_stores/opnsense-api-modules/`\n\n';
  markdown += 'Each module gets its own JSON file containing:\n';
  markdown += '- Module metadata (name, type, URL)\n';
  markdown += '- Complete list of endpoints\n';
  markdown += '- Model structure with fields and constraints\n';
  markdown += '- XML model URL if found\n\n';

  // Add prerequisites section
  markdown += '## Prerequisites\n\n';
  markdown += '- Node.js 18+ installed\n';
  markdown += '- yarn package manager\n';
  markdown += '- Internet connection to access OPNsense documentation\n\n';

  // Add installation section
  markdown += '## Installation\n\n';
  markdown += '1. Clone the repository\n';
  markdown += '2. Install dependencies:\n';
  markdown += '   ```bash\n';
  markdown += '   yarn install\n';
  markdown += '   ```\n\n';

  // Add usage section
  markdown += '## Usage\n\n';
  markdown += 'Run the crawler from the project root:\n\n';
  markdown += '```bash\n';
  markdown += 'cd crawler\n';
  markdown += 'yarn start\n';
  markdown += '```\n\n';
  markdown += 'The crawler will:\n';
  markdown += '1. Start crawling from the index pages\n';
  markdown += '2. Process each module sequentially\n';
  markdown += '3. Save results to the storage directory\n';
  markdown += '4. Display progress and statistics\n\n';

  // Add output format section
  markdown += '## Output Format\n\n';
  markdown += 'Each module JSON file contains:\n\n';
  markdown += '```json\n';
  markdown += '{\n';
  markdown += '  "name": "module_name",\n';
  markdown += '  "type": "core|plugin",\n';
  markdown += '  "url": "https://docs.opnsense.org/...",\n';
  markdown += '  "modelUrl": "https://raw.githubusercontent.com/...",\n';
  markdown += '  "endpoints": [\n';
  markdown += '    {\n';
  markdown += '      "controller": "controller_name",\n';
  markdown += '      "command": "command_name",\n';
  markdown += '      "method": "GET|POST",\n';
  markdown += '      "url": "/api/module/controller/command",\n';
  markdown += '      "parameters": "$param1,$param2",\n';
  markdown += '      "description": "Endpoint description"\n';
  markdown += '    }\n';
  markdown += '  ],\n';
  markdown += '  "modelStructure": {\n';
  markdown += '    "fields": {\n';
  markdown += '      "field_name": {\n';
  markdown += '        "type": "TextField",\n';
  markdown += '        "required": true,\n';
  markdown += '        "constraints": {\n';
  markdown += '          "minLength": 1,\n';
  markdown += '          "maxLength": 255\n';
  markdown += '        }\n';
  markdown += '      }\n';
  markdown += '    },\n';
  markdown += '    "containers": {}\n';
  markdown += '  }\n';
  markdown += '}\n';
  markdown += '```\n\n';

  // Add statistics section
  markdown += '## Typical Statistics\n\n';
  markdown += 'A full crawl typically discovers:\n';
  markdown += '- **Total modules**: 88 (24 Core + 64 Plugins)\n';
  markdown += '- **Total endpoints**: 2,023+\n';
  markdown += '- **Core endpoints**: 752\n';
  markdown += '- **Plugin endpoints**: 1,271\n';
  markdown += '- **Modules with XML models**: 78/88 (88.6%)\n\n';

  // Add troubleshooting section
  markdown += '## Troubleshooting\n\n';
  markdown += '### Common Issues\n\n';
  markdown +=
    '1. **Network timeouts**: The crawler implements retry logic, but slow connections may need timeout adjustments\n';
  markdown += '2. **Missing XML models**: Not all modules have XML definitions; this is normal\n';
  markdown += '3. **Rate limiting**: The crawler includes delays between requests to avoid overwhelming the server\n\n';

  // Add extending section
  markdown += '## Extending the Crawler\n\n';
  markdown += 'To modify the crawler behavior:\n\n';
  markdown += '1. **Add new module types**: Update the index URLs in `crawler.ts`\n';
  markdown += '2. **Extract additional data**: Modify the parsing logic in the request handlers\n';
  markdown += '3. **Change storage format**: Update the data transformation before saving\n';
  markdown += '4. **Add new endpoints**: Include additional URL patterns in the crawler configuration\n\n';

  // Add data usage section
  markdown += '## Data Usage\n\n';
  markdown += 'The crawled data is used by several generator scripts:\n\n';
  markdown += '- **yarn generate:typescript:core**: Creates TypeScript API client classes for core modules\n';
  markdown += '- **yarn generate:typescript:plugin**: Creates TypeScript API client classes for plugin modules\n';
  markdown += '- **yarn generate:postman:core**: Creates Postman collection for testing core modules\n';
  markdown += '- **yarn generate:postman:plugin**: Creates Postman collection for testing plugin modules\n';
  markdown += '- **yarn generate:docs:core**: Generates Core module documentation\n';
  markdown += '- **yarn generate:docs:plugin**: Generates Plugin module documentation\n\n';

  // Write to file
  const outputPath = path.join(outputDir, 'README.md');
  fs.writeFileSync(outputPath, markdown, 'utf-8');

  console.log(`\nCrawler documentation generated successfully!`);
  console.log(`Output: ${outputPath}`);
}

// Run the script
main().catch(console.error);
