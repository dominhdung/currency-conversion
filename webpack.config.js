const webpack = require('webpack');
const path = require('path');
const postcss = require('./postcss.config');
const defaultRules = require('./rules');

module.exports = {
  entry: [
      'babel-polyfill',
    './src/index'
  ],
  module: {
    rules: [
      /*{
        test: /\.js?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader',
      },*/
      defaultRules.html,
      defaultRules.css,
      defaultRules.js,
      defaultRules.svg,
      defaultRules.file,
    ],
  },

  resolve: {
    extensions: ['.js','.scss']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: postcss(),
      },
    }),
  ]
};
