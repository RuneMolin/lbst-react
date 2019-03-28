const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  devServer: {
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|eot|woff|woff2|ttf|svg)$/,
        use: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Eksempel på SPA'
    }),
    new CleanWebpackPlugin()
  ]
}
