const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common,{
  mode: "development",
  output: {
    // path: path.join(__dirname, './dist'),
    path: path.resolve(__dirname, './dist'),
    filename: "[name].bundle.js",
    assetModuleFilename: 'imgs/[hash][ext][query]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
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
    ]
  }
});