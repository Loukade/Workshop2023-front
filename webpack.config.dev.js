const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageMeta = require('./package.json')
const Dotenv = require('dotenv-webpack');
const webpack = require("webpack");

module.exports = {

    devServer: {
            historyApiFallback: true,
    },
        mode: 'development',
        devtool: 'source-map',
        entry: './src/index.js',
        resolve: {
            alias: {
                Public: path.resolve(__dirname, 'public/'),
                Hook: path.resolve(__dirname, 'src/hook'),
                Components: path.resolve(__dirname, 'src/components'),
                Fonts: path.resolve(__dirname, 'src/assets/fonts'),
            },
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader' // will use .babelrc
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]', // Répertoire de destination pour les polices
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    type: 'asset/resource',
                }
            ]
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index.js',
            publicPath: '/'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: packageMeta.title
            }),
            new Dotenv({
                path: `./.env.development`
            }),
        ]
    }

