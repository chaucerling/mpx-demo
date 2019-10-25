module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  settings: {
    "html/html-extensions": [".html", ".mpx"],  // consider .html and .mpx files as HTML
  },
  plugins: [
    'html'
  ],
  'globals': {
    'wx': true,
    'getApp': true,
    'App': true,
    '__mpx_mode__': true
  },
  rules: {
    'no-cond-assign': 0,
    'camelcase': ['error', {'allow': ['__mpx_mode__', '__swan_exports_map__']}]
  }
}
