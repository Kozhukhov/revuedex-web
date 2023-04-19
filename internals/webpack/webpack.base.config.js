const webpack = require('webpack');
const paths = require('./paths');

module.exports = {
  context: paths.srcDir,
  cache: true,
  resolve: {
    modules: [paths.srcDir, 'node_modules'],
    alias: {
      Root: paths.srcDir,
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|(woff|woff2))$/i,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === 'development',
    }),
  ],
};
