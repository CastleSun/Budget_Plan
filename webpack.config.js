var path = require('path');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ['es2015', 'react', 'stage-0'],
				},
			}
		]
	}, 
	devServer: {
		inline: true,
		port: 8008,
	},
};
