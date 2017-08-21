
var path = require("path");
var webpack = require('webpack');
// 处理HTML，可以将所有的入口文件注册到HTML模板中
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: {
        // ①
        index: [
            'babel-polyfill',
            'react-hot-loader/patch',
            './src/index.js'
        ],
        // 公共模块单独打包成一个文件
        vendor: [
            'react',
            'react-dom',
            'react-hot-loader'
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        // chunkhash hash的区别：hash是所有输出文件共用一个hash，chunkhash是不同文件是不同的hash，可以用这个做缓存
        // 是入口文件的输出名字
        filename: '[name].[hash:8].js',
        // 输出绝对路径
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        // ②启用HMR
        hot: true,
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
                                'react-hot-loader/babel',
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
                use: ['style-loader', 'css-loader', 'sass-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')]
                    }
                }]
            },
            {
                // 处理图片格式的文件
                test: /\.(png|jpe?g||git)$/,
                use: [{
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
        // ④启用HMR
        new webpack.HotModuleReplacementPlugin(),
        // 注入全局变量process.env.NODE_ENV
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            // title: 'webpack配制学习',
            // 指定打包出来的html的名字，默认是在output指定的path路径下创建一个叫index.html文件
            // filename: 'test/index.html',
            // 指定模板，也可以指定模板的loader，如handlebars来加载解析这种模板,也可以在module.loaders中指定
            // template: '!!handlebars!src/index.hbs',
            template: './src/index.html',
            // minify: {
            //     html5: true
            // }
            // 若为true会在引入的JS后面加上?hash
            // hash: true,
            // cache: false,
        }),
        // 将多个入口文件中公用的模块提取出来一个单独的文件，方便浏览器做缓存，可以有多个
        new webpack.optimize.CommonsChunkPlugin({
            // 若什么都不配制，只配制一个公用模块的名字，则会把所有【入口文件（entry中配制的入口文件）】依赖的公用模块都提取到公用模块中
            name: ['vendor', 'manifest'],
            // ?还没明白这个参数的用法
            // names: ['lodash', 'test'],
            // filename: '[name].[hash:4].js',
            // 如： 3,指定当有几个文件共用的模块才需要提取，当Infinity保证只打指定的文件进来
            minChunks: Infinity,
            // 指定需要提取哪些入口文件中的公用模块
            // chunks: [],
            // 公共文件的文件大小的最小值
            minSize: 1024
        })
    ]
}