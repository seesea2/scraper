const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './server.ts'
  },
  resolve: {
    extensions: ['.ts']
  },
  target: 'node',
  mode: 'development',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
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
