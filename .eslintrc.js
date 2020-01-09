const newLocal = "true";
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'error',
    semi: ['error', 'never'],
    eqeqeq: ['error', 'smart'],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
    // "no-floating-decimal": 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
