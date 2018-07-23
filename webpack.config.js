const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/js/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            '__DEV__': true,
        }),
        new CopyWebpackPlugin([
            {from:'src/index.html',to:'index.html'}
        ]),
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};