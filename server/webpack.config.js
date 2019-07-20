const path = require('path');
const nodeExternals = require('webpack-node-externals');

var config = {
  entry: {
    server: path.join(__dirname, './server.ts')
  },
  resolve: {
    extensions: ['.ts']
  },
  target: 'node',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, '../debug'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  node: {
    __dirname: false
  },
  watch: false
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.output.path = path.join(__dirname, '../dist');
  }
  return config;
};
