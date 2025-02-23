module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended' // Add this line to integrate Prettier
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'object-curly-newline': 'warn',
    'react/prop-types': 'warn',
    'react/jsx-one-expression-per-line': 'warn',
    'operator-linebreak': 'warn',
    'react/jsx-wrap-multilines': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'import/no-cycle': 'warn',
    'no-nested-ternary': 'off',
     // Disable conflicting rules with Prettier
    'prettier/prettier': 'warn'
  },
};
