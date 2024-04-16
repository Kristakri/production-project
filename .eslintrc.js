module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      "files": ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      "rules": {
        'storybook/hierarchy-separator': 'error',
        'storybook/default-exports': 'off',
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/no-deprecated': 'off',
    '@typescript-eslint/no-floating-promises': 'off', // I don't know about this
    'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['to', 'data-testid'] }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    'react/display-name': 'off',
    '@typescript-eslint/await-thenable': 'off'
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    },
    {
      files: ['**/src/**/*.stories.{ts,tsx}'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/display-name': 'off'
      }
    }
  ]
}
