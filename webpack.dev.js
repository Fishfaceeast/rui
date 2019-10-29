/**
 * Created by yuqian on 2019/5/16.
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fs = require('fs');

const dirents = fs.readdirSync('./src/', { withFileTypes: true });
const folderNames = dirents
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const entryList = folderNames.map((folderName) => `./src/${folderName}/index.js`);


module.exports = merge(common, {
  mode: 'development',
  entry: {
    demo: './examples/demo.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: `./examples/index.html`,
      filename: `./index.html`,
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
});