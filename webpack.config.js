module.exports = {
  entry: './index.js',

  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ],
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader!sass-loader'
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
