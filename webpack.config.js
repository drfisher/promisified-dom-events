const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		promisifiedDomEvents: './dist/promisifiedDomEvents.js'
	},
	output: {
		filename: '[name].min.js'
	},
	plugins: [
		new UglifyJSPlugin()
	]
};
