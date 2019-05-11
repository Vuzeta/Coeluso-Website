const {
  resolve
} = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require("autoprefixer");
const webpack = require('webpack');

module.exports = function (env) {

  var prod = env !== undefined && env.production === true;
  var dev = env !== undefined && env.production === true;

  return {

    entry: "./src/js/app.js",
    output: {
      path: resolve(__dirname, "dist"),
      filename: prod ? "[name].[chunkhash].js" : "[name].js",
    },
    module: {
      rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [{
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':src']
            }
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
              name: '[name].[ext]',
            },
          }, ]
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: prod ? "style.[chunkhash].css" : "style.css",
        chunkFilename: '[id].css',
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer()
          ]
        }
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  }
}