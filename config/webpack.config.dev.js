const path = require('path')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'static/js/bundle.js',
    },
    // 模块 配置loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // < 10kb 转base64
                    }
                },
                generator: {
                    // 输出图片目录
                    filename: "static/images/[hash:8][ext][query]"
                }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:10][ext][query]"
                }
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/, // 排除node_modules
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            }
        ]
    },
    // 插件
    plugins: [
        new EslintWebpackPlugin({
            context: path.resolve(__dirname, '../src')
        }),new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/index.css"
        })
    ],
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: '3000',
        open: true
    }
}
