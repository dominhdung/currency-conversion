module.exports = {
  css: {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]',
        },
      },
      {
        loader: 'postcss-loader',
      },
    ],
  },
  js: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
  file: {
    test: /\.(jpe?g|png|gif|eot|ttf|woff2|woff?)$/i,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
      },
    },
  },
  svg: {
    test: /\.svg/,
    use: [
      'babel-loader',
      'svg-inline-loader',
    ],
  },
  html: {
    test: /\.html$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  },
};
