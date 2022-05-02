const Webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
const childProcess = require('child_process');
const util = require('util');

const rendererCompiler = Webpack({ ...require('../webpack.config.renderer'), mode: 'development' });
const mainCompiler = Webpack({ ...require('../webpack.config.main'), mode: 'development' });
const preloadCompiler = Webpack({ ...require('../webpack.config.preload'), mode: 'development' });
// const devServerOptions = {
//   compress: true,
//   port: 9000,
//   https: false,
//   hot: false,
// };
// const rendererServer = new WebpackDevServer(devServerOptions, rendererCompiler);

const compileMain = () => {
  mainCompiler.run();
};

const compilePreload = () => {
  preloadCompiler.run();
};

const runRendererServer = () => {
  console.log('Starting renderer process server...');
  // return rendererServer.start();
  rendererCompiler.run();
};

const startApp = () => {
  console.log('Starting app...');
  return util.promisify(childProcess.exec)('yarn cross-env NODE_ENV=development electron .');
};

// const startTask = async () => console.log('Launching...');

compileMain();
compilePreload();
runRendererServer();
startApp();
