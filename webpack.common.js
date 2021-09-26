const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
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

