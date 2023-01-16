module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'react/prop-types': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/label-has-for': 'off',
    'label-has-associated-control': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
