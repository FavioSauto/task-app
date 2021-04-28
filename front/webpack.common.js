const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  resolve: {
    alias: {
      "@Actions": path.resolve(__dirname, "src/actions"),
      "@Css": path.resolve(__dirname, "src/assets/css"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Containers": path.resolve(__dirname, "src/containers"),
      "@Hooks": path.resolve(__dirname, "src/utils/hooks"),
      "@Reducers": path.resolve(__dirname, "src/reducers"),
      "@Routes": path.resolve(__dirname, "src/routes"),
      "@Src": path.resolve(__dirname, "src"),
      "@Types": path.resolve(__dirname, "src/utils/types"),
      "@Utils": path.resolve(__dirname, "src/utils"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.m?js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};
