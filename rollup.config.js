import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import del from 'rollup-plugin-delete';
import { dts } from 'rollup-plugin-dts';

export default defineConfig([
  // Main SDK bundle - CommonJS
  {
    input: 'src/index.ts',
    external: ['axios', 'https'],
    plugins: [
      del({ targets: 'dist/*', runOnce: true }),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: false,
        declarationMap: false,
      }),
    ],
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  },
  // Main SDK bundle - ESM
  {
    input: 'src/index.ts',
    external: ['axios', 'https'],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: false,
        declarationMap: false,
      }),
    ],
    output: {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
  },
  // Keygen utility - CommonJS
  {
    input: 'src/keygen.ts',
    external: ['crypto'],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: false,
        declarationMap: false,
      }),
    ],
    output: {
      file: 'dist/keygen.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  },
  // Keygen utility - ESM
  {
    input: 'src/keygen.ts',
    external: ['crypto'],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: false,
        declarationMap: false,
      }),
    ],
    output: {
      file: 'dist/keygen.js',
      format: 'es',
      sourcemap: true,
    },
  },
  // Type definitions for main SDK
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
  },
  // Type definitions for keygen
  {
    input: 'src/keygen.ts',
    plugins: [dts()],
    output: {
      file: 'dist/keygen.d.ts',
      format: 'es',
    },
  },
]);
