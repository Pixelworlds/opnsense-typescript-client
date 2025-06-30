# OPNsense API Crawler Documentation

## Overview

The OPNsense API Crawler is an automated tool that discovers and documents the OPNsense API by scraping the official documentation pages. It extracts endpoint information, parameters, and data models from both Core and Plugin modules.

## Assumptions

The crawler operates based on several key assumptions about the OPNsense documentation structure:

### 1. URL Structure

The crawler assumes the following URL patterns:

- **Index pages**: Documentation is organized under two main index pages:
  - Core: `https://docs.opnsense.org/development/api/core/index.html`
  - Plugins: `https://docs.opnsense.org/development/api/plugins/index.html`
- **Module pages**: Individual modules follow the pattern:
  - Core: `https://docs.opnsense.org/development/api/core/{module}.html`
  - Plugins: `https://docs.opnsense.org/development/api/plugins/{module}.html`
- **API endpoints**: All API URLs follow the pattern `/api/{module}/{controller}/{command}`

### 2. CSS Selectors

The crawler relies on specific HTML structure and CSS selectors:

- **Module links**: Extracted from `<a>` tags within the index pages
- **API tables**: Located using `table` elements containing endpoint information
- **Table structure**: Expects columns for Method, Module, Controller, Command, and Parameters
- **GitHub links**: Searches for `<a>` tags with `href` containing "github.com" and ".xml"
- **Code blocks**: Looks for `<code>` elements containing parameter information

### 3. GitHub URL Translation

The crawler automatically converts GitHub web URLs to raw content URLs:

- **Pattern**: `https://github.com/{owner}/{repo}/blob/{branch}/{path}`
- **Converts to**: `https://raw.githubusercontent.com/{owner}/{repo}/{branch}/{path}`
- **Purpose**: Enables direct fetching of XML model files for parsing
- **Assumption**: All model files are stored in public GitHub repositories

### 4. XML Model Structure

The crawler expects XML models to follow OPNsense conventions:

- **Root element**: `<model>` containing the entire model definition
- **Items section**: `<items>` containing field definitions
- **Field types**: Standard OPNsense field types (TextField, IntegerField, BooleanField, etc.)
- **Constraints**: Optional constraint definitions within field elements
- **Containers**: Nested structures for complex data models

### 5. Parameter Matching

The crawler makes assumptions about parameter formats:

- **Parameter syntax**: Expects parameters in format `$param1,$param2` or `$uuid`
- **UUID parameters**: Assumes `$uuid` refers to resource identifiers
- **Path parameters**: Converts `$param` to `{param}` for URL construction
- **Optional parameters**: Does not distinguish between required and optional parameters

### 6. Documentation Consistency

The crawler assumes:

- **Table format**: All API documentation uses consistent table structures
- **Method types**: Only GET and POST methods are documented
- **Module naming**: Module names in URLs match controller paths
- **Command patterns**: Commands follow consistent naming conventions

### 7. Error Handling Assumptions

- **Missing models**: Not all modules have XML model definitions (this is expected)
- **Network failures**: Implements retry logic assuming temporary failures
- **Rate limiting**: Includes delays between requests to avoid overwhelming servers
- **Parsing failures**: Continues crawling even if individual pages fail to parse

## How It Works

The crawler operates in four main phases:

### 1. Module Discovery

The crawler starts by fetching two main index pages:

- **Core modules**: `https://docs.opnsense.org/development/api/core/index.html`
- **Plugin modules**: `https://docs.opnsense.org/development/api/plugins/index.html`

From these pages, it extracts links to individual module documentation pages.

### 2. Endpoint Extraction

For each module page, the crawler:

- Parses the HTML to find API endpoint tables
- Extracts controller names, commands, HTTP methods, and parameters
- Builds complete API URLs for each endpoint
- Captures endpoint descriptions when available

### 3. XML Model Discovery

The crawler searches for XML model definitions by:

- Looking for links to GitHub containing `.xml` files
- Converting GitHub URLs to raw.githubusercontent.com URLs
- Parsing XML files to extract field definitions, types, and constraints
- Mapping model fields to their corresponding endpoints

### 4. Data Storage

All collected data is stored as JSON files in:
`crawler/storage/key_value_stores/opnsense-api-modules/`

Each module gets its own JSON file containing:

- Module metadata (name, type, URL)
- Complete list of endpoints
- Model structure with fields and constraints
- XML model URL if found

## Prerequisites

- Node.js 18+ installed
- yarn package manager
- Internet connection to access OPNsense documentation

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```

## Usage

Run the crawler from the project root:

```bash
cd crawler
yarn start
```

The crawler will:

1. Start crawling from the index pages
2. Process each module sequentially
3. Save results to the storage directory
4. Display progress and statistics

## Output Format

Each module JSON file contains:

```json
{
  "name": "module_name",
  "type": "core|plugin",
  "url": "https://docs.opnsense.org/...",
  "modelUrl": "https://raw.githubusercontent.com/...",
  "endpoints": [
    {
      "controller": "controller_name",
      "command": "command_name",
      "method": "GET|POST",
      "url": "/api/module/controller/command",
      "parameters": "$param1,$param2",
      "description": "Endpoint description"
    }
  ],
  "modelStructure": {
    "fields": {
      "field_name": {
        "type": "TextField",
        "required": true,
        "constraints": {
          "minLength": 1,
          "maxLength": 255
        }
      }
    },
    "containers": {}
  }
}
```

## Typical Statistics

A full crawl typically discovers:

- **Total modules**: 88 (24 Core + 64 Plugins)
- **Total endpoints**: 2,023+
- **Core endpoints**: 752
- **Plugin endpoints**: 1,271
- **Modules with XML models**: 78/88 (88.6%)

## Troubleshooting

### Common Issues

1. **Network timeouts**: The crawler implements retry logic, but slow connections may need timeout adjustments
2. **Missing XML models**: Not all modules have XML definitions; this is normal
3. **Rate limiting**: The crawler includes delays between requests to avoid overwhelming the server

## Extending the Crawler

To modify the crawler behavior:

1. **Add new module types**: Update the index URLs in `crawler.ts`
2. **Extract additional data**: Modify the parsing logic in the request handlers
3. **Change storage format**: Update the data transformation before saving
4. **Add new endpoints**: Include additional URL patterns in the crawler configuration

## Data Usage

The crawled data is used by several generator scripts:

- **yarn generate:typescript:core**: Creates TypeScript API client classes for core modules
- **yarn generate:typescript:plugin**: Creates TypeScript API client classes for plugin modules
- **yarn generate:postman:core**: Creates Postman collection for testing core modules
- **yarn generate:postman:plugin**: Creates Postman collection for testing plugin modules
- **yarn generate:docs:core**: Generates Core module documentation
- **yarn generate:docs:plugin**: Generates Plugin module documentation
