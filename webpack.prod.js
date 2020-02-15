const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
   mode: 'production',
   devtool: 'source-map',
   module: {
    rules: [
        {
            // Loads CSS into a file when you import it via Javascript
            // Rules are set in MiniCssExtractPlugin
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
    ]
    },
   optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
   plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
});