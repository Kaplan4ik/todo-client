module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'plugin:import/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', 'vite.config.ts']
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src']
      }
    }
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'no-relative-import-paths',
    'prettier'
  ],
  rules: {
    'import/newline-after-import': ['error', { count: 1 }],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ],
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'prettier/prettier': 'error',
  }
};
