const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ mode } = { mode: 'production ' }) => {
	// eslint-disable-next-line no-console
	console.log(`Built mode: ${mode}`);

	return {
		mode,
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				},
				{
					test: /\.(jsx|js)$/,
					include: path.resolve(__dirname, 'src'),
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									[
										'@babel/preset-env',
										{
											targets: 'defaults'
										}
									],
									'@babel/preset-react'
								]
							}
						}
					]
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true
							}
						}
					]
				},
				{
					test: /\.svg$/,
					loader: 'raw-loader'
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
			plugins: [
				new TsconfigPathsPlugin({
					configFile: path.resolve(__dirname, 'tsconfig.json')
				})
			]
		},
		devServer: {
			historyApiFallback: true
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html')
			})
		]
	};
};
