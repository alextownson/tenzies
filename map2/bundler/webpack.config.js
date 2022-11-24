const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin ({
            template: path.resolve(__dirname, '../src/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        static: {
            directory: path.join(__dirname, '../static')
        }
    }
};