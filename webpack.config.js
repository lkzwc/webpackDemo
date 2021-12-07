const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
module.exports = {
  entry: {
    index: "./src/index.js",
    login: "./src/a.js",
  },
  output: {
    path: resolve(__dirname, "./build"),
    filename: "[name].js", //用占位符替代
  },
  resolveLoader: {
    modules: ["./node_modules", "./myloader"],
  },
  module: {
    rules: [
      // {
      //   test: /\.less$/,
      //   use: ["style-loader", "css-loader", "less-loader"], //从后向前
      // },
      {
        test: /\.less$/,
        use: ["mystyle", "mycss", "myless"], //从后向前
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html", //指定模板
      filename: "index.html",
      chunks: ["index"], //区分html中导入的js模块
    }),
    new HtmlWebpackPlugin({
      template: "./src/public/login.html",
      filename: "login.html",
      chunks: ["login"],
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "production",
};
