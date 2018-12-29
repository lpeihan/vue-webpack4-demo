module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      '@babel/plugin-transform-runtime', {
        corejs: 2,
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ],
    [
      'import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true        
      }, 'vant'
    ],
    require('@babel/plugin-syntax-dynamic-import'),
    'transform-vue-jsx'
  ]
};
