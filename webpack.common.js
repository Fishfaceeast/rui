/**
 * Created by yuqian on 2019/5/16.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

const fs = require('fs');

const dirents = fs.readdirSync('./src/', { withFileTypes: true });
const folderNames = dirents
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const entryList = folderNames.map((folderName) => `./src/${folderName}/index.js`);
const entryMap = {};
folderNames.forEach((folderName) => {
  entryMap[`example-${folderName}`] = `./src/${folderName}/index.js`
});

const HTMLPluginList = folderNames.map((folderName) => new HtmlWebpackPlugin({
  title: 'Production',
  template: `./src/${folderName}/example/index.html`,
  filename: `./${folderName}.html`,
}));

module.exports = {
  entry: {
    ...entryMap,
    bundle: entryList,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CaseSensitivePathsPlugin()
  ].
   concat(HTMLPluginList).
   concat(new ManifestPlugin()),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
