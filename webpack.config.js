const webpack = require('webpack')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: 'inline-sourcemap',
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
          'eslint-loader'
        ],
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader'
      }
    ]
  }
};
