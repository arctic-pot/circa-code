const path = require('path');

module.exports = {
  target: 'electron18-main',
  entry: {
    main: {
      import: './src/main.ts',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/main'),
    filename: '[name].js',
    clean: true,
  },
  externals: {
    electron: 'commonjs2 electron',
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
