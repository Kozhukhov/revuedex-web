const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const paths = require('./paths');

const plugins = [
  new CleanWebpackPlugin(),
  // new CompressionPlugin({
  //   algorithm: 'gzip',
  //   test: /\.js(\?.*)?$/i,
  // }),
  new HtmlWebpackPlugin({
    template: `${paths.publicDir}/index.html`,
    favicon: `${paths.publicDir}/favicon.ico`,
  }),
];

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: paths.appEntryPoint,
  },
  output: {
    path: paths.buildDir,
    publicPath: './',
    chunkFilename: 'static/[contenthash:8].[name].chunk.js',
    filename: 'static/[contenthash:8].[name].js',
  },
  plugins,
};
