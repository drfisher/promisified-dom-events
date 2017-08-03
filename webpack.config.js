/* jshint esnext:true, node: true */
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
	devtool: 'source-map',
	entry: {
		promisifiedDomEvents: './src/promisifiedDomEvents.ts'
	},
	output: {
		filename: './dist/[name].min.js'
	},
	resolve: {
		extensions: ['.ts']
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				include: [
					path.resolve(__dirname, 'src')
				]
			}
		]
	},
	plugins: [
		new UglifyJSPlugin()
	]
};

module.exports = config;
