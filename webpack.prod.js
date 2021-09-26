const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const common = require('./webpack.common');


module.exports = merge(common,{
  mode: "production",
  output: {
    // path: path.join(__dirname, './dist'),
    path: path.resolve(__dirname, './dist'),
    filename: "[name].[contenthash].bundle.js",
    assetModuleFilename: 'imgs/[hash][ext][query]'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      minify: {
        removeAttributeQuotes: true,
        collapeseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // extract css into files
          "css-loader", // css to commonjs
          "sass-loader" // sass to css
        ],
      },
    ]
  }
});