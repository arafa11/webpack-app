const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  // devtool: "none", // remove eval from output
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js", // contentHash
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader", // inject styles to dom
          "css-loader", // css to commonjs
          "sass-loader" // sass to css
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html",
  })],
}

