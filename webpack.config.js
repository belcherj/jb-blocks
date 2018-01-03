/* global __dirname, module, process, require */

var webpack = require( 'webpack' );
var NODE_ENV = process.env.NODE_ENV || 'development';
var webpackConfig = {
	entry: './block.js',
	output: {
		path: __dirname,
		filename: 'block.build.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( NODE_ENV ),
		} ),
	],
};

if ( 'production' === NODE_ENV ) {
	webpackConfig.plugins.push( new webpack.optimize.UglifyJsPlugin() );
}

module.exports = webpackConfig;
