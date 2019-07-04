const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.ENV,
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
   module: {
    rules: [
     {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
       loader: "babel-loader"
      }
     },
     {
      test: /\.html$/,
      use: [
        {
         loader: "html-loader"
        }
      ]
     },
     {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
      ],
    },
    {
      test: /\.(jpg|jpeg|png|gif|ico)$/,
      exclude: /node_modules/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
        publicPath: 'dist/images'
      }
    }
    ]
   },
  plugins: [
    new HtmlWebpackPlugin({
     template: "./public/index.html",
     filename: "./index.html",
     favicon: './public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    })
  ]
};