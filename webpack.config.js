var webpack =require('webpack');
module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		filename: 'bundle.js',
	},
	module:{
		loaders:[
			{
				test:/\.js[x]?$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	}
};