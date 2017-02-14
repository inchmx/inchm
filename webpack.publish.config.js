/*
* 发布时候的配置文件
* */

var path = require('path')
var webpack=require('webpack')

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var HtmlWebpackPlugin = require('html-webpack-plugin');

var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/js/app.js'),
        vendors: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [

            {
                test: /\.jsx?$/, 
                loader: 'babel',
            },
            {
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },

            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=25000&name=images/[name].[ext]'
            },

            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                loader: 'url?limit=50000&name=fonts/[name].[ext]'
            }
        ]
    },
    resolve: {

        extensions: ['', '.js', '.json', '.scss', '.jsx'],
    },

    plugins: [

        new CleanPlugin(['dist']),

        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        new ExtractTextPlugin("app.css"),

        new HtmlWebpackPlugin({
            template: './src/template.html',
            htmlWebpackPlugin: {
                "files": {
                    "css": ["app.css"],
                    "js": ["vendors.js","bundle.js"]
                }
            },

            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),

        new webpack.DefinePlugin({

            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
    ]


}
