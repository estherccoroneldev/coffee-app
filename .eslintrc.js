module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser', // Enables ES6+ features
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['react', 'react-native', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Custom rules for React Native
    'react/prop-types': 'off', // React Native doesn't always require prop types
    'react-native/no-inline-styles': 'warn', // Avoid inline styles for better performance
    'react-native/split-platform-components': 'error', // Enforce platform-specific components
    'prettier/prettier': 'error', // Enforces Prettier code style formatting

    // Best practices
    'no-console': 'error', // Warn about console logs in the code
    'no-unused-vars': 'warn', // Warn about unused variables
    'react-hooks/rules-of-hooks': 'error', // Enforces rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // Warns about missing dependencies in hooks
    complexity: 'warn',

    // React Native
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-raw-text': 'error',
    'react-native/no-single-element-style-arrays': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'], // For TypeScript files
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-native/all',
        'plugin:prettier/recommended',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
