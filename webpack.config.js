const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.less$/,
                use: [{
                loader: 'style-loader' // creates style nodes from JS strings
                }, {
                loader: 'css-loader' // translates CSS into CommonJS
                }, {
                loader: 'less-loader' // compiles Less to CSS
                }]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}