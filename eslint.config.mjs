import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...tseslint.configs.recommended,

  {
    plugins: { js },
    files: ['**/*.{js,mjs,cjs}'],
    ...js.configs.recommended
  },

  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true
      },
      globals: {
        ...globals.node
      }
    },

    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },

  {
    files: ['apps/client/**/*.{ts,tsx}'],

    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y
    },

    settings: {
      react: {
        version: '19'
      }
    },

    languageOptions: {
      globals: {
        ...globals.browser
      }
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules
    }
  },

  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended']
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended']
  },

  {
    ignores: ['node_modules', 'dist']
  },

  {
    plugins: { prettier: prettierPlugin },
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    extends: [prettierConfig],
    rules: {
      'prettier/prettier': 'error'
    }
  }
]);
