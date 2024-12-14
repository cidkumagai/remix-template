import type { Linter } from 'eslint';

import {
  baseConfig,
  importConfigArray,
  languageOptionFactory,
  reactConfig,
  reactHooksConfig,
  testingLibraryConfig,
  typescriptConfig,
  vitestConfig,
} from './.eslint';
import pluginVitest from '@vitest/eslint-plugin';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const ignoresConfig: Linter.Config = {
  name: 'eslint/ignores',
  ignores: ['dist/**', 'node_modules/**', 'pnpm-lock.yaml', 'coverage/**'],
};

const vitestSetupTestsConfig: Linter.Config = {
  name: 'vitest/setup-tests',
  files: ['./setup-test.ts'],
  plugins: {
    vitest: pluginVitest,
  },
  rules: {
    'vitest/prefer-spy-on': 'off',
  },
};

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  './tsconfig.json',
);

export const languageOptionConfig = languageOptionFactory(tsConfigPath);

export default tseslint.config(
  ignoresConfig,
  languageOptionConfig,
  baseConfig,
  typescriptConfig,
  ...importConfigArray,
  reactConfig,
  reactHooksConfig,
  vitestConfig,
  vitestSetupTestsConfig,
  testingLibraryConfig,
);
