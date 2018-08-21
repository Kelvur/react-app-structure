const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const devMode = process.env.NODE_ENV !== 'production';

const server = 'localhost';
const port = 3000;

module.exports = {
	entry: {
		main: './src/main.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	resolve: {
		extensions: ['.js'],
		modules: ['./', 'node_modules', 'src']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader?cacheDirectory', // Transpilador, con cache activada
					options: {
						presets: [ // Presets son agrupaciones de plugins
							'es2015',
							'react',
							'stage-2'
						],
						plugins: [
							'transform-decorators-legacy',
						]
					},
				}
			},
			{
				test: /\.css$/,
				use: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					// 'postcss-loader'
				]
			},
			// {
			// 	test: /\.less$/,
			// 	use: [
			// 		{loader: 'style-loader'},
			// 		{loader: 'css-loader'},
			// 		{loader: 'less-loader'}
			// 	]
			// },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			inject: false,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new CleanWebpackPlugin('dist', {}),
		new CopyWebpackPlugin([
			{from: './public/favicon.ico', to: './favicon.ico', toType: 'file'}
		])
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: { // Esto le dice a MiniCssExtractPlugin que lo compile todo en un solo fichero
					name: 'style',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				}
			}
		}
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		open: false,
		host: server,
		port: port,
		public: `http://${server}:${port}`,
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
	}
}
