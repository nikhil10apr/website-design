const webpack = require('webpack');
const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR = ['lodash', 'react', 'react-dom'];

module.exports = {
	mode: 'development',
	entry: {
		bundle: './source/index.js',
		vendor: VENDOR
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/'//This is used whenever a loader creates a new file.
	},
	/*devServer: {
		contentBase: './dist'
	},*/
	module: {
		rules: [
			{
				test: /\.js$/, // Transform all .js files required somewhere with Babel
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				/*loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				})*/
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(jpe?g|png|svg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }
						/*
						>40000 bytes -- separate file is created
						<40000 bytes -- image is converted to base64 and added to bundle.js
						*/
					},
					'image-webpack-loader'
				]	
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		//new ExtractTextPlugin('style.css')//all the css files caught by css-loader is pasted in this file
		/*new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),*/
		new HtmlWebpackPlugin({
			template: 'source/index.html'
		})
	]
};