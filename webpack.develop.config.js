/*
* 开发时候的配置文件
* */

var path = require('path');
// 自动打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'src/js/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    eslint: {
        configFile: '.eslintrc.js'
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
        ],
        loaders: [
            {
                test: /\.jsx?$/, 
                loader: 'babel',
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url'
            },
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                loader: 'url'
            }
        ]
    },
    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:8080/', browser: 'chrome'})
    ]

}

