const path = require('path');
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
// const webpack = require('webpack');
//
// function _injectIf(condition, value) {
//   return condition ? [value] : [];
// }

// const _dev = process.env.NODE_ENV === 'development'

module.exports = {
  target: 'electron18-renderer',
  entry: {
    renderer: {
      import: './src/renderer.ts',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/renderer'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html?$/,
        use: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Circa Code',
    }),
    // ..._injectIf(_dev, new webpack.HotModuleReplacementPlugin()),
  ],
  externals: {
    electron: 'commonjs2 electron',
  },
};
