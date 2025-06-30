# Generators

This directory contains Node.js scripts that automatically generate documentation, TypeScript modules, and Postman collections from the OPNsense API crawler data.

## Available Generators

### Documentation Generators

- `generate-crawler-docs.js` - Generates crawler documentation
- `generate-core-docs.js` - Generates core modules documentation
- `generate-plugin-docs.js` - Generates plugin modules documentation
- `generate-typescript-readme.js` - Generates TypeScript SDK documentation

### TypeScript Generators

- `generate-core-modules.js` - Generates TypeScript core modules
- `generate-plugin-modules.js` - Generates TypeScript plugin modules
- `generate-sdk.js` - Generates the complete SDK in src/ folder

### Postman Generators

- `generate-core-postman-collection.js` - Generates core API Postman collection
- `generate-plugin-postman-collection.js` - Generates plugin API Postman collection

## Usage

All generators are integrated with yarn scripts in the main package.json:

```bash
# Documentation
yarn generate:docs:crawl
yarn generate:docs:core
yarn generate:docs:plugin
yarn generate:docs:typescript

# TypeScript modules
yarn generate:typescript:core
yarn generate:typescript:plugin

# SDK generation
yarn generate:sdk

# Postman collections
yarn generate:postman:core
yarn generate:postman:plugin
```

## Requirements

- Node.js 16+
- Crawler data must be available in `crawler/opnsense-api-data.json`
- All generators read from the crawler output and write to their respective directories

## Output Locations

- Documentation: `docs/` and `typescript/README.md`
- TypeScript modules: `typescript/core/` and `typescript/plugins/`
- SDK build: `src/` (complete SDK with index.ts and organized modules)
- Postman collections: `postman/`
- Build configuration: `src/build-config.json`

## Development

To modify generator behavior:

1. Edit the appropriate generator script
2. Run the generator to test changes
3. Verify output in the target directory

All generators are designed to be idempotent and can be run multiple times safely.
