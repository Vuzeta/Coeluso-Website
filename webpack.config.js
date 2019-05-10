const {
  resolve
} = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: "./src/js/app.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js"
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
      // {
      //   test: /\.scss$/,
      //   use: [
      //     "style-loader", // creates style nodes from JS strings
      //     "css-loader", // translates CSS into CommonJS
      //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
      //   ]
      // },
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
        filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}