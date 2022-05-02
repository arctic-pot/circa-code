yarn webpack build --config ./webpack.config.main.js --mode development
yarn webpack build --config ./webpack.config.renderer.js --mode development
yarn webpack build --config ./webpack.config.preload.js --mode development
npx cross-env NODE_ENV=development electron .
