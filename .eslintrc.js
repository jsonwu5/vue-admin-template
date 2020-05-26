module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'eslint:recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'standard/no-callback-literal': 'off',
    'node/no-deprecated-api': 'off',
    'no-prototype-builtins': 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto'
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
