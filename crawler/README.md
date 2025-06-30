# OPNsense API Crawler

This crawler automatically discovers and documents the OPNsense API by scraping the official documentation pages and extracting endpoint information, parameters, and data models.

## Overview

The crawler performs the following operations:

1. Scrapes the OPNsense documentation index pages for Core and Plugin modules
2. Extracts API endpoint information from each module's documentation page
3. Discovers and parses XML model definitions to understand data structures
4. Stores the collected data in structured JSON format

## How It Works

### 1. Module Discovery

The crawler starts by fetching two main index pages:

- Core modules: `https://docs.opnsense.org/development/api/core/index.html`
- Plugin modules: `https://docs.opnsense.org/development/api/plugins/index.html`

From these pages, it extracts links to individual module documentation pages.

### 2. Endpoint Extraction

For each module page, the crawler:

- Parses the HTML to find API endpoint tables
- Extracts HTTP methods, URLs, and endpoint descriptions
- Identifies controller and command patterns from the URLs
- Detects path parameters in endpoint URLs

### 3. XML Model Discovery

The crawler searches for XML model references in the documentation:

- Looks for links to GitHub repositories containing model definitions
- Converts GitHub URLs to raw content URLs for direct access
- Downloads and parses XML files to extract field definitions
- Maps field types, constraints, and validation rules

### 4. Data Storage

All collected data is stored in JSON format under:

```
crawler/storage/key_value_stores/opnsense-api-modules/
```

Each module gets its own JSON file named `{type}-{module}.json` (e.g., `core-auth.json`, `plugin-nginx.json`)

## Prerequisites

- Node.js 18 or higher
- Bun runtime (for running the crawler)
- Internet connection to access OPNsense documentation

## Installation

1. Install dependencies:

```bash
bun install
```

2. Ensure the crawler dependencies are installed:

```bash
cd crawler
bun install
```

## Usage

### Running the Crawler

From the project root directory:

```bash
bun run crawler/crawler.ts
```

The crawler will:

1. Start processing Core modules first
2. Then process Plugin modules
3. Display progress for each module being processed
4. Save results to the storage directory

### Output

The crawler generates JSON files with the following structure:

```json
{
  "name": "module_name",
  "type": "core|plugin",
  "url": "documentation_url",
  "endpoints": [
    {
      "method": "GET|POST|PUT|DELETE",
      "url": "/api/module/controller/command",
      "controller": "controller_name",
      "command": "command_name",
      "parameters": ["param1", "param2"],
      "description": "Endpoint description"
    }
  ],
  "modelUrl": "url_to_xml_model",
  "modelStructure": {
    "containers": { ... },
    "fields": { ... }
  }
}
```

### Crawler Output Statistics

A typical run processes:

- 24 Core modules
- 64 Plugin modules
- Over 2,000 total API endpoints
- 78+ XML model definitions

## Troubleshooting

### Common Issues

1. **Network Errors**: Ensure you have a stable internet connection
2. **Permission Errors**: Make sure the storage directory is writable
3. **Missing Modules**: Some modules may not have API documentation

### Logs

The crawler outputs progress information to the console. Look for:

- Module processing status
- XML model discovery results
- Error messages for failed requests

## Extending the Crawler

To modify the crawler behavior:

1. **Add New Module Types**: Edit the index page URLs in `crawler.ts`
2. **Change Storage Format**: Modify the data structure in the storage functions
3. **Extract Additional Data**: Add new parsing logic to the endpoint extraction

## Data Usage

The crawled data is used by various generator scripts:

- `generate-core-modules.js` - Creates TypeScript classes for Core modules
- `generate-plugin-modules.js` - Creates TypeScript classes for Plugin modules
- `generate-core-postman-collection.js` - Generates Postman collection for Core APIs
- `generate-plugin-postman-collection.js` - Generates Postman collection for Plugin APIs
