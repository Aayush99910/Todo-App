const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To-do App',
        }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                user: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
        
    },
};