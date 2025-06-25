# OPNsense TypeScript Client - Testing Utilities

This folder contains comprehensive testing utilities for the OPNsense TypeScript Client. These tools help validate module implementations, test API endpoints, and ensure code quality.

## 🧪 Available Testing Tools

### 1. **Module Validator** (`module-validator.ts`)
Validates all module implementations for consistency and completeness.

**Usage:**
```bash
bun testing/module-validator.ts
```

**Features:**
- Analyzes all 92 modules (27 core + 65 plugins)
- Checks for standard methods (getStatus, start, stop, restart, etc.)
- Scores modules based on completeness (0-100%)
- Identifies missing functionality and inconsistencies
- Provides recommendations for improvements

**Output:**
- Module-by-module analysis with scores
- Summary statistics and quality metrics
- List of modules needing attention
- Top performing modules

### 2. **Comprehensive Endpoint Tester** (`comprehensive-test.ts`)
Tests actual API endpoints against a live OPNsense instance.

**Usage:**
```bash
# Set environment variables for your OPNsense instance
export OPNSENSE_URL="https://your-opnsense.local"
export OPNSENSE_API_KEY="your-api-key"
export OPNSENSE_API_SECRET="your-api-secret"

bun testing/comprehensive-test.ts
```

**Features:**
- Tests real API endpoints with live connections
- Validates authentication and connection
- Tests core and plugin module endpoints
- Categorizes errors (auth, not found, connection, etc.)
- Provides detailed success/failure reporting

**Error Categories:**
- 🔐 Authentication errors (401/403)
- ❓ Not found errors (404 - missing plugins)
- 🌐 Connection errors (network issues)
- ❌ Other API errors

### 3. **Basic Endpoint Tester** (`endpoint-test.ts`)
Systematic testing framework for all available endpoints.

**Usage:**
```bash
bun testing/endpoint-test.ts
```

**Features:**
- Tests endpoint structure without requiring live connection
- Validates method signatures and return types
- Tests both core and plugin modules
- Configurable test parameters
- Detailed error reporting and logging

### 4. **Demo Tester** (`demo-test.ts`)
Demonstrates complete module coverage and availability.

**Usage:**
```bash
bun testing/demo-test.ts
```

**Features:**
- Shows all 92 available modules
- Validates module initialization
- Tests method availability
- Provides module count statistics
- Visual confirmation of complete coverage

### 5. **Basic Client Tester** (`test-client.ts`)
Quick validation of client initialization and basic functionality.

**Usage:**
```bash
bun testing/test-client.ts
```

**Features:**
- Fast client initialization test
- Module availability verification
- Plugin module count validation
- Simple pass/fail reporting

## 📊 Quality Metrics

### Current Status (Post-Improvements)
- **Total Modules**: 92 (27 core + 65 plugins)
- **Average Quality Score**: 88.6%
- **High Quality Modules (≥80%)**: 68 modules (74%)
- **Modules Needing Attention (<50%)**: 4 modules (4%)

### Test Coverage
- ✅ **Module Structure**: All modules properly initialized
- ✅ **Type Safety**: Full TypeScript compliance
- ✅ **API Consistency**: Standardized patterns
- ✅ **Service Controls**: Standard start/stop/restart methods
- ✅ **Configuration**: Get/set configuration methods

## 🚀 Running All Tests

```bash
# Quick validation
bun testing/test-client.ts

# Module quality analysis
bun testing/module-validator.ts

# Demo all functionality
bun testing/demo-test.ts

# Test with live instance (requires credentials)
export OPNSENSE_URL="https://your-opnsense.local"
export OPNSENSE_API_KEY="your-api-key"
export OPNSENSE_API_SECRET="your-api-secret"
bun testing/comprehensive-test.ts
```

## 🔧 Testing Best Practices

### Before Testing Live Instance
1. **Backup Configuration**: Always backup your OPNsense config
2. **Test Environment**: Use a test instance when possible
3. **Read-Only First**: Start with GET endpoints before POST/DELETE
4. **Gradual Testing**: Test one module at a time initially

### Credentials Setup
```bash
# Option 1: Environment variables
export OPNSENSE_URL="https://192.168.1.1"
export OPNSENSE_API_KEY="your-api-key"
export OPNSENSE_API_SECRET="your-api-secret"

# Option 2: Edit test files directly (not recommended for production)
```

### Security Notes
- **Never commit credentials** to version control
- **Use environment variables** for sensitive data
- **Test with limited-privilege API keys** when possible
- **Monitor API rate limits** during testing

## 📈 Interpreting Results

### Module Validator Scores
- **90-100%**: Excellent - Complete implementation
- **80-89%**: Good - Minor improvements possible
- **60-79%**: Fair - Some missing functionality
- **40-59%**: Poor - Significant improvements needed
- **0-39%**: Critical - Major issues requiring attention

### Endpoint Test Results
- **✓ Success**: Endpoint responded correctly
- **✗ Auth Error**: Check API credentials
- **✗ Not Found**: Plugin likely not installed
- **✗ Connection**: Network or server issues

## 🛠️ Extending Tests

### Adding New Tests
1. Create new test file in `testing/` folder
2. Import client: `import { OPNsenseClient } from '../src/client';`
3. Use consistent patterns from existing tests
4. Add documentation to this README

### Custom Test Scenarios
```typescript
// Example: Test specific plugin
const client = new OPNsenseClient(config);
const nginxStatus = await client.plugins.nginx.getStatus();
const nginxConfig = await client.plugins.nginx.getConfig();
```

This testing suite ensures the OPNsense TypeScript Client maintains high quality and comprehensive coverage across all 92 modules.