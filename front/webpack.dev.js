  
const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  devServer: {
    open: true,
    inline: true,
    contentBase: "/",
    hot: true,
    historyApiFallback: true,
  },
});