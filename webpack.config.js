const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'dist/'//This is used whenever a loader creates a new file.
	},
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
	}
	/*plugins: [
		new ExtractTextPlugin('style.css')//all the css files caught by css-loader is pasted in this file
	]*/
};