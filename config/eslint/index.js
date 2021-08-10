module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended'
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
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended', // removes redundant warnings between TS & ESLint
        'plugin:@typescript-eslint/recommended' // rules specific to typescript, e.g., writing interfaces
      ]
    }
  ]
};
