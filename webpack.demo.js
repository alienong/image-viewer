const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './demo/main.js',
    output: {
        path: path.resolve(__dirname, './demo/dist'),
        filename: 'js/demo.js',
        publicPath: "/"
    },
    devServer: {
        host: '0.0.0.0', // 既可以通过localhost，也可以通过内网ip（便于同局域网内的其他设备访问）
        overlay: {
            errors: true // 所有错误都显示到网页上
        }
    },
    externals: {},
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./demo/index.html"),
            filename: "index.html",
            hash: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i, use: [
                    {
                        loader: MiniCssExtractPlugin.loader, options: {
                            // 这里可以指定一个 publicPath
                            // 默认使用 webpackOptions.output中的publicPath
                            publicPath: '../'
                        },
                    },
                    "css-loader", "resolve-url-loader",
                    {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.png$/i, use: [{
                    loader: "url-loader", options: {
                        limit: 1024 * 8,
                        outputPath: 'images/',
                        name: '[name].[ext]'
                    }
                }],
            },
        ]
    }
};