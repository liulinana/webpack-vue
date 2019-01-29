let path = require('path');
let webpack = require('webpack');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');
let WebpackDevServer = require('webpack-dev-server');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// let CommonsChunkPlugin = require('CommonsChunkPlugin');
/*
 html-webpack-plugin插件，webpack中生成HTML的插件，
 具体可以去这里查看https://www.npmjs.com/package/html-webpack-plugin
 */
let HtmlWebpackPlugin = require('html-webpack-plugin');
/*
 webpack插件，提取公共模块
 */
// let CommonsChunkPlugin = config.optimization.splitChunks;
let config = {
    //入口文件配置
    entry: {
        // main:[
        //     './src/main.js'
        // ]
        index: path.resolve(__dirname, './src/main.js'),
        vendors: ['vue', 'vue-router','vue-resource','vuex','element-ui',] // 需要进行单独打包的文件
    },
    //出口文件配置
    output: {
        path: path.join(__dirname, 'dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: '/dist/',                //模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/[name].js',            //每个页面对应的主js的生成配置
        chunkFilename: 'js/[name].asyncChunk.js?'+new Date().getTime() //chunk生成的配置
    },
    target:"web",
    module: {
        //加载器
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
                        js: "babel-loader",
                    }
                }
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",

                options:  {
                    "presets": [
                        "es2015",
                        "stage-0",
                        "env",
                        "vue"
                    ],
                    "plugins": [
                        [
                            "import",
                            {
                                "libraryName": "iview",
                                "style": true
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                //如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[hash].[ext]'
            }
        ]
    },
    //插件
    plugins: [
        new VueLoaderPlugin(),
        //webpack3.0的范围提升
        // new  config.optimization.splitChunks(),
        //打包生成html文件，并且将js文件引入进来
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, 'dist/html/index.html'), //生成的html存放路径，相对于path
        //     template: path.resolve(__dirname, 'src/html/index.html'), //ejs模板路径,前面最好加上loader用于处理
        //     inject: 'body',  //js插入的位置，true/'head'/'body'/false
        //     hash: true
        // }),
        new HtmlWebpackPlugin({
            title: "This is the result",
            filename: "index.html",
            inject: "body",
            favicon: "",
            minify: {
                caseSensitive: false,
                collapseBooleanAttributes: true,
                collapseWhitespace: true
            },
            hash: true,
            cache: true,
            showErrors: true,
            chunks: ["index","venders"],
            chunksSortMode: "auto",
            excludeChunks: "",
            xhtml: false,
            template: __dirname + '/index.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        //提取功能模块
        // new CommonsChunkPlugin({
        //     name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
        //     minChunks: 2, //公共模块被使用的最小次数。配置为2，也就是同一个模块只有被2个以外的页面同时引用时才会被提取出来作为common chunks
        //     // children:true  //如果为true,那么公共组件的所有子依赖都将被选择进来
        // }),
    ],
    //使用webpack-dev-server，启动热刷新插件
    devServer: {
        historyApiFallback:true,
        contentBase: path.join(__dirname, "/"),
        host: 'localhost',  //建议写IP地址，开发时候电脑的ip地址。localhost我不知道是幻觉还是怎样，有时候热刷新不灵敏
        port: 8080, //默认8080
        inline: true, //可以监控js变化
        hot: true,//热启动
        compress:true,
        //服务端压缩是否开启
    },
    //搜索路径变量
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions:['.js','.scss','.vue','.json']// 可以不加后缀, 直接使用 import xx from 'xx' 的语法
    }
};
module.exports = config;
