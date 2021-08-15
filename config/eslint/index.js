module.exports = {
  plugins: ['react', 'react-hooks', 'testing-library', 'jest', 'import', 'prettier', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  ecmaFeatures: {
    es6: true,
    jsx: true
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    react: 'detect',
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    'import/extensions': ['.js', '.jsx']
  },
  rules: {
    'no-console': 2,
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 120,
        trailingComma: 'none',
        semi: true
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        }
      },
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended', // removes redundant warnings between TS & ESLint
        'plugin:@typescript-eslint/recommended' // rules specific to typescript, e.g., writing interfaces
      ]
    }
  ]
};
