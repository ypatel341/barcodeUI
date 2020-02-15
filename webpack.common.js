const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          exclude: function(modulePath) {
              return /node_modules/.test(modulePath) && !/node_modules\/@imd\/sharedlib/.test(modulePath)
          },
          use: {
              loader: 'babel-loader',
              options: {
                  presets: [
                      [
                          '@babel/preset-env',
                          {
                              corejs: '3',
                              useBuiltIns: 'false'//we can ignore babel because we are importing all of it in the portal
                          }
                      ],
                      '@babel/preset-react'
                  ],
                  plugins: [
                      ['@babel/plugin-proposal-class-properties'],
                      [
                          'import',
                          { libraryName: 'antd', "libraryDirectory": "es", style: 'css' },
                          'antd'
                      ],
                      [
                          'import',
                          { libraryName: '@imd/sharedlib', style: false, camel2DashComponentName: false, libraryDirectory:'build'},
                      ],
                      ['@babel/plugin-transform-runtime'],
                      ['@babel/transform-object-assign']
                  ],
                  sourceType: 'unambiguous'
              }
          }
      },
      {
          test: /\.(jpg|png|svg)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[name]-[hash:8].[ext]',
                      outputPath: 'images/',
                      publicPath: '/images/'
                  }
              }
          ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
          test: /\.css$/,
          use: [
              {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                      // you can specify a publicPath here
                      // by default it uses publicPath in webpackOptions.outputx
                      // publicPath: '../',
                      hmr: process.env.NODE_ENV === 'development'
                  }
              },
              'css-loader'
          ]
      }
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css'
    }),
    new CopyPlugin([
        {
            from: 'node_modules/@imd/sharedlib/build/images/*',
            to: 'images/',
            flatten: true
        }
    ])
  ]
}
