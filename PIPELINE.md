# Complete GitLab CI/CD Pipeline Setup Guide

## Overview

I've created a comprehensive GitLab CI/CD pipeline for your OPNsense TypeScript SDK project. This pipeline will automatically:

1. **Validate** code quality and TypeScript types
2. **Build** the TypeScript project using Rollup
3. **Test** the built artifacts
4. **Package** and validate the distribution
5. **Publish** to npm and GitLab package registries

## Pipeline Features

### 🔍 **Validation Stage**
- **ESLint checks**: Ensures code quality and consistency
- **TypeScript type checking**: Validates types without building
- **Dependency security scanning**: Checks for vulnerabilities

### 🔨 **Build Stage**
- **Rollup compilation**: Builds ES modules, CommonJS, and TypeScript declarations
- **Artifact caching**: Stores build outputs for subsequent stages
- **Multi-format output**: Supports both `import` and `require` usage

### 🧪 **Test Stage**
- **Unit tests**: Runs existing test suite if available
- **Build validation**: Ensures all required files are generated
- **Bundle size analysis**: Monitors output size and performance

### 📦 **Package Stage**
- **Structure validation**: Verifies package.json exports
- **File existence checks**: Ensures all referenced files exist
- **Documentation generation**: Creates build reports

### 🚀 **Publish Stage**
- **npm registry**: Public publishing on version tags
- **GitLab registry**: Internal publishing for development
- **Environment-specific**: Different behavior for branches vs tags

## Manual Setup Steps

Since I couldn't directly create the file in your repository, here's how to set it up manually:

### Step 1: Create the Pipeline File

1. **Navigate to your project**: `loworbit/opnsense-typescript-sdk`
2. **Create new file**: `.gitlab-ci.yml` in the root directory
3. **Copy the content** from the first artifact above

### Step 2: Configure CI/CD Variables

Go to **Project Settings > CI/CD > Variables** and add:

| Variable | Value | Type | Protected | Masked |
|----------|-------|------|-----------|---------|
| `NPM_TOKEN` | Your npm auth token | Variable | ✅ | ✅ |

**To get NPM_TOKEN:**
1. Go to [npmjs.com](https://www.npmjs.com) → Account Settings → Access Tokens
2. Create a new **Automation** token
3. Copy the token value

### Step 3: Test the Pipeline

1. **Push to master branch** to trigger the pipeline
2. **Check pipeline status** in GitLab UI
3. **Review job logs** for any issues

### Step 4: Publishing Workflow

To publish a new version:

```bash
# Update version
bun version patch  # or minor, major

# Create and push tag
git tag v0.1.3
git push origin v0.1.3

# Pipeline will automatically publish to npm
```

## Pipeline Execution Matrix

| Trigger | Validate | Build | Test | Package | Publish |
|---------|----------|-------|------|---------|---------|
| Push to master | ✅ | ✅ | ✅ | ✅ | GitLab only |
| Merge request | ✅ | ✅ | ✅ | ❌ | ❌ |
| Version tag | ✅ | ✅ | ✅ | ✅ | npm + GitLab |

## Job Descriptions

### `validate:lint`
- **Purpose**: Code quality enforcement
- **Tools**: ESLint with your existing config
- **Failure**: Blocks pipeline if linting errors found

### `validate:typecheck`
- **Purpose**: TypeScript type validation
- **Tools**: TypeScript compiler (`tsc --noEmit`)
- **Failure**: Blocks pipeline if type errors found

### `build`
- **Purpose**: Compile TypeScript to JavaScript
- **Tools**: Rollup with your existing config
- **Output**: `dist/` folder with ES modules, CommonJS, and types
- **Artifacts**: Cached for 1 hour

### `test:unit`
- **Purpose**: Validate build output
- **Behavior**: 
  - Runs `bun test` if test script exists
  - Otherwise validates that all build files exist
- **Dependencies**: Requires `build` job to complete

### `package:validate`
- **Purpose**: Ensure package is ready for publishing
- **Checks**: 
  - All package.json exports exist
  - File structure is correct
  - Version information is valid

### `publish:npm`
- **Purpose**: Publish to public npm registry
- **Trigger**: Only on version tags (`v*.*.*`)
- **Requirements**: NPM_TOKEN variable must be set

### `publish:gitlab`
- **Purpose**: Publish to GitLab package registry
- **Trigger**: Master branch pushes and tags
- **Authentication**: Uses GitLab CI token automatically

### `performance:bundle_size`
- **Purpose**: Monitor bundle size
- **Alerts**: Warns if bundles exceed 1MB
- **Reports**: Shows size of each output format

## Troubleshooting

### Common Issues

1. **Pipeline fails on lint stage**
   ```bash
   # Fix locally first
   bun run lint:fix
   git add .
   git commit -m "Fix linting issues"
   git push
   ```

2. **TypeScript compilation errors**
   ```bash
   # Check types locally
   bunx tsc --noEmit
   # Fix errors and push
   ```

3. **NPM publish fails**
   - Verify NPM_TOKEN is set correctly
   - Check if version already exists on npm
   - Ensure you have publish permissions

4. **Build artifacts missing**
   - Check rollup.config.js is correct
   - Verify package.json build script works locally
   - Review build job logs

### Local Testing

Before pushing, test the pipeline steps locally:

```bash
# Install dependencies
bun install

# Run linting
bun run lint

# Run type checking
bunx tsc --noEmit

# Run build
bun run build

# Verify artifacts
ls -la dist/
```

## Benefits of This Pipeline

1. **Automated Quality Gates**: Prevents bad code from reaching production
2. **Consistent Builds**: Same environment every time
3. **Automated Publishing**: No manual steps for releases
4. **Multi-registry Support**: Both npm and GitLab registries
5. **Performance Monitoring**: Tracks bundle size over time
6. **Security Scanning**: Identifies vulnerable dependencies
7. **Parallel Execution**: Faster feedback on changes

## Advanced Features

### Conditional Execution
- Different jobs run based on branch/tag/MR context
- Saves CI minutes by skipping unnecessary jobs

### Artifact Management
- Build outputs cached between stages
- Automatic cleanup after 1 hour
- Efficient pipeline execution

### Environment Segregation
- Development builds go to GitLab registry
- Production releases go to npm
- Protected variables for sensitive data

### Monitoring & Reporting
- Bundle size tracking
- Build status indicators
- Environment-specific deployments

This pipeline provides a professional-grade CI/CD setup that will scale with your project and ensure consistent, reliable builds and deployments.