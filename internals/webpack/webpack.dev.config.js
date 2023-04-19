const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

const plugins = [
  new HtmlWebpackPlugin({
    template: `${paths.publicDir}/index.html`,
    favicon: `${paths.publicDir}/favicon.ico`,
    chunksSortMode: "manual",
    chunks: ["app"],
  }),
];

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    app: [paths.localConfigEntryPoint, paths.appEntryPoint],
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    publicPath: paths.publicPath,
  },
  plugins,
  devServer: {
    hot: true,
    open: true,
    port: 9000,
    historyApiFallback: true,
  },
};
