# GitLab CI/CD Pipeline for OPNsense TypeScript Client

## Overview

This project uses a comprehensive GitLab CI/CD pipeline that ensures code quality, builds the TypeScript library, validates outputs, and publishes to both npm and GitLab package registries.

## Pipeline Stages

### 🔍 **Validate Stage**
- **lint**: ESLint code quality checks
- **type_check**: TypeScript type validation
- **security_scan**: npm audit for security vulnerabilities

### 🔨 **Build Stage**
- **build**: Compiles TypeScript using Rollup to generate ES modules, CommonJS, and type declarations

### 🧪 **Test Stage**
- **test_build_artifacts**: Validates that all required build outputs exist and are loadable
- **test_typescript_declarations**: Tests that TypeScript declarations work correctly
- **bundle_analysis**: Analyzes and reports bundle sizes

### 📦 **Package Stage**
- **validate_package**: Validates package.json structure and exports
- **package_tarball**: Creates npm package tarball

### 🚀 **Deploy Stage**
- **deploy_npm**: Publishes to npm registry (manual, on tags only)
- **deploy_gitlab_registry**: Publishes to GitLab package registry

## Pipeline Configuration

### Node.js Version
- **Runtime**: Node.js 20 (Alpine Linux)
- **Package Manager**: Yarn 4.0.2 with Corepack

### Caching Strategy
- **Cache Key**: `${CI_COMMIT_REF_SLUG}-yarn-cache`
- **Cached Paths**: `.yarn/cache/`, `node_modules/`
- **Policy**: pull-push for optimal performance

### Artifacts
- **Build outputs**: `dist/` directory (1 week retention)
- **Package tarball**: `*.tgz` files (1 week retention)
- **Bundle analysis**: `bundle-size-report.json` (30 days retention)

## Setup Instructions

### 1. GitLab CI/CD Variables

Configure these variables in **Project Settings > CI/CD > Variables**:

| Variable | Description | Type | Protected | Masked |
|----------|-------------|------|-----------|---------|
| `NPM_TOKEN` | npm registry authentication token | Variable | ✅ | ✅ |

**To obtain NPM_TOKEN:**
1. Go to [npmjs.com](https://www.npmjs.com) → Profile → Access Tokens
2. Generate new token with **Automation** permissions
3. Copy the token value

### 2. Repository Configuration

Ensure your repository has:
- Valid `package.json` with correct exports
- `tsconfig.build.json` for build configuration
- `rollup.config.js` for bundling
- ESLint configuration

## Pipeline Execution Matrix

| Trigger | Validate | Build | Test | Package | Deploy |
|---------|----------|-------|------|---------|---------|
| Push to master/main | ✅ | ✅ | ✅ | ✅ | GitLab Registry |
| Merge request | ✅ | ✅ | ✅ | ❌ | ❌ |
| Version tag (v*.*.*) | ✅ | ✅ | ✅ | ✅ | npm + GitLab |

## Job Details

### Validation Jobs

#### `lint`
- **Purpose**: Code quality enforcement using ESLint
- **Failure**: Blocks pipeline progression
- **Configuration**: Uses project's ESLint config

#### `type_check`
- **Purpose**: TypeScript type validation without compilation
- **Command**: `yarn type-check` (runs `tsc --noEmit`)
- **Failure**: Blocks pipeline progression

#### `security_scan`
- **Purpose**: Dependency vulnerability scanning
- **Command**: `yarn npm audit --all --recursive --environment production`
- **Failure**: Allowed to fail (warning only)

### Build Jobs

#### `build`
- **Purpose**: Compile TypeScript to JavaScript bundles
- **Tools**: Rollup with TypeScript plugin
- **Outputs**: 
  - `dist/index.js` (ES modules)
  - `dist/index.cjs` (CommonJS)
  - `dist/index.d.ts` (TypeScript declarations)
- **Artifacts**: Cached for downstream jobs

### Test Jobs

#### `test_build_artifacts`
- **Purpose**: Validate build outputs exist and are functional
- **Checks**:
  - All required files exist and are non-empty
  - CJS module can be required
  - ESM module can be imported
- **Dependencies**: Requires successful build

#### `test_typescript_declarations`
- **Purpose**: Validate TypeScript declarations work correctly
- **Method**: Creates test TypeScript file that imports the library
- **Validation**: Compiles test file with strict TypeScript settings

#### `bundle_analysis`
- **Purpose**: Monitor bundle size and performance
- **Reports**: File sizes for each output format
- **Alerts**: Warns if bundles exceed 1MB
- **Artifacts**: Size report JSON for tracking over time

### Package Jobs

#### `validate_package`
- **Purpose**: Ensure package is ready for publishing
- **Checks**:
  - package.json exports point to existing files
  - All entry points are valid
  - Package structure is correct
- **Simulation**: Runs `yarn pack --dry-run`

#### `package_tarball`
- **Purpose**: Create distributable package
- **Output**: `.tgz` file ready for publishing
- **Triggers**: Only on master/main branches and tags

### Deploy Jobs

#### `deploy_npm`
- **Purpose**: Publish to public npm registry
- **Trigger**: Manual action on version tags only
- **Authentication**: Requires NPM_TOKEN variable
- **Safety**: Checks if version already exists before publishing
- **Access**: Public package publication

#### `deploy_gitlab_registry`
- **Purpose**: Publish to GitLab package registry
- **Trigger**: Automatic on master/main pushes and tags
- **Authentication**: Uses GitLab CI job token
- **Scope**: Scoped to project namespace

## Publishing Workflow

### Development Releases
1. Push to `master` or `main` branch
2. Pipeline automatically publishes to GitLab registry
3. Install with: `npm install @your-namespace/opnsense-typescript-client`

### Production Releases
1. Update version: `yarn version patch|minor|major`
2. Create and push tag: `git tag v1.0.0 && git push origin v1.0.0`
3. Pipeline runs all stages
4. Manually trigger npm deployment in GitLab UI
5. Package available on npm: `npm install @richard-stovall/opnsense-typescript-client`

## Local Development

Test pipeline steps locally before pushing:

```bash
# Install dependencies
yarn install

# Run validation steps
yarn lint
yarn type-check

# Run build
yarn build

# Verify build outputs
ls -la dist/
node -e "console.log(require('./dist/index.cjs'))"
node -e "import('./dist/index.js').then(console.log)"

# Test package
yarn pack --dry-run
```

## Troubleshooting

### Common Issues

#### Lint Failures
```bash
# Fix automatically
yarn lint:fix
git add .
git commit -m "Fix linting issues"
```

#### TypeScript Errors
```bash
# Check types locally
yarn type-check
# Fix errors in source code
```

#### Build Failures
- Verify `rollup.config.js` is correct
- Check `tsconfig.build.json` configuration
- Ensure all imports are resolvable

#### npm Publish Failures
- Verify NPM_TOKEN is set and valid
- Check if version already exists: `npm view @richard-stovall/opnsense-typescript-client versions --json`
- Ensure you have publish permissions

#### GitLab Registry Issues
- Verify project has package registry enabled
- Check CI job token permissions
- Ensure proper scoping in package name

### Performance Optimization

The pipeline includes several optimizations:

1. **Yarn Cache**: Persistent dependency caching across jobs
2. **Artifact Reuse**: Build outputs shared between jobs
3. **Parallel Execution**: Independent jobs run simultaneously
4. **Conditional Execution**: Jobs only run when necessary

### Security Considerations

1. **Token Security**: NPM_TOKEN is masked and protected
2. **Scope Isolation**: GitLab registry uses project-specific scoping
3. **Audit Scanning**: Regular dependency vulnerability checks
4. **Manual Deployment**: Production npm releases require manual approval

## Pipeline Monitoring

### Metrics Tracked
- Build success/failure rates
- Bundle size over time
- Pipeline execution duration
- Dependency vulnerabilities

### Alerts
- Bundle size warnings (>1MB)
- Security vulnerability notifications
- Build failure notifications

This pipeline ensures high code quality, reliable builds, and secure publishing while providing comprehensive feedback and monitoring capabilities.