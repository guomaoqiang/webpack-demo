
var path = require("path");
var webpack = require('webpack');
// 处理HTML，可以将所有的入口文件注册到HTML模板中
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取CSS文件到单独的文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 提取打包信息
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    // 入口文件
    entry: {
        index: [
            './src/index.js'
        ],
        // 公共模块单独打包成一个文件
        vendor: [
            'react',
            'react-dom'
            'react-hot-loader'
        ]
    },
    output: {
        // chunkhash hash的区别：hash是所有输出文件共用一个hash，chunkhash是不同文件是不同的hash，可以用这个做缓存
        // 是入口文件的输出名字
        filename: '[name].[chunkhash:4].js',
        chunkFilename: '[name].[chunkhash:4].js',
        // 输出绝对路径
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                // .js 或.jsx格式的文件都会使用下面配制的loader去解析
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    // 使用babel-loader解析
                    {
                        loader: 'babel-loader',
                        options: {
                            // 支持react ES6语法
                            presets: ['react', 'es2015'],
                            plugins: [
                                // ③
                                // 'react-hot-loader/babel',
                                // 支持calss属性
                                'transform-class-properties'
                            ]
                        }
                    }
                ]
            },
            {
                // .scss或.css文件使用下面的loader
                test: /\.(scss|css)$/,
                // loader使用顺序，postcss-loader --> sass-loader  --> css-loader --> style-loader
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader:'css-loader',
                        options: {
                            // 压缩css
                            minimize: true
                        }
                    }, 'sass-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')],
                        }
                    }]
                })
            },
            {
                // 处理图片格式的文件
                test: /\.(png|jpe?g||git)$/,
                use: [{
                    // 一般限制小图片转 base64 可以用 url-loader，其他情况都用 file-loader。
                    // url-loader应该是file-loader上加了一层过滤。
                    loader: 'url-loader', 
                    options: {
                        // 小于8.192K的图片转成baseURI
                        limit: 8192,
                        name: 'images/[name].[hash:4].[ext]',
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        // 提取样式到一个css文件中
        new ExtractTextPlugin('style.[hash:4].css'),
        // 更多参数参考http://webpack.github.io/docs/node.js-api.html#stats-tojson
        // stats-webpack-plugin配制中指定输出webpack.stats.json文件，
        // 该文件可以导入https://chrisbateman.github.io/webpack-visualizer/中
        // 查看项目打包时每一个模块的大小，可以给我们打包优化做参考
        new StatsPlugin('webpack.stats.json', {
            // the source code of modules
            source: false,
            // built modules information
            modules: true
        }),
        // 压缩js代码
        new webpack.optimize.UglifyJsPlugin(),
        // 将多个入口文件中公用的模块提取出来一个单独的文件，方便浏览器做缓存，可以有多个
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            minChunks: Infinity,
            minSize: 1024
        })
    ]
}