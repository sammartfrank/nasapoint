const path = require('path');
const webpack = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
			},
			{
      test: /\.html$/,
      use: {
         loader: "html-loader",
									options: { minimize: true }
      }
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
      loader: 'file-loader'
    },
		],
	},
	optimization: {
		splitChunks: {
				chunks: 'all'
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Production',
			favicon: './public/favicon.ico',
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].bundle.css',
			chunkFilename: '[id].bundle.css'
		}),
		new webpack.HotModuleReplacementPlugin()
	]

}