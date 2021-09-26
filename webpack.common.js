const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { 
    main: "./src/index.js",
    vendor: "./src/vendor.js",
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
      {
        test: /\.html$/i,
        // loader: "html-loader",
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "imgs"
            }
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html",
  })],
}

