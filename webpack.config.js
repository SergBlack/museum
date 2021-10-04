const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3005,
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'development',
        template: path.resolve(__dirname, './index.html'),
        filename: 'index.html',
      },
    ),
  ],
};
