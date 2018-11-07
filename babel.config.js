module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-runtime',
    require('@babel/plugin-syntax-dynamic-import')
  ]
};
