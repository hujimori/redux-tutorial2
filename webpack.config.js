const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: [
        './src/index.jsx',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.jsx?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader' },
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ use: 'css-loader' }) },
        ],

    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: './.eslintrc',
                },
            },
        }),
        new ExtractTextPlugin('css/bundle.css')

    ],
};