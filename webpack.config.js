var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.jsx',
 
    output: {
        path: __dirname ,
        filename: 'bundle.js'
    },
 
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname
    },
 
    module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react','stage-0'],
          plugins: ['transform-decorators-legacy'],
        }
      },
      {
          test: /\.css$/,
          loader: 'style-loader'
        }, {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
    ]
  },
};