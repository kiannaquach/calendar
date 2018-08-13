const path = require('path');

module.exports = {
  entry: ['./client/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      }
    ],
  },
  output: {
    filename: 'calendar-bundle.js',
    path: path.join(`${__dirname}/public`),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};