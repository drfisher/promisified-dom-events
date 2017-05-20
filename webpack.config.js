/* jshint esnext:true, node: true */
const path = require('path');

const config = {
	devtool: 'source-map',
	entry: {
		promisifiedDomEvents: './src/promisifiedDomEvents.ts'
	},
	output: {
		filename: './dist/[name].js'
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
	}
};

module.exports = config;
