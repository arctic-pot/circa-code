const rendererConfig = require('./webpack.config.renderer');
const path = require("path");

module.exports = {
  ...rendererConfig,
  target: 'electron18-preload',
  entry: {
    preload: {
      import: './src/preload.ts',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/preload'),
    filename: '[name].js',
    clean: true,
  },
};
