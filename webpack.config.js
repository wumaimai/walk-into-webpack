const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        lib: {
          name: 'chunk-libs',
          test: / [\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        }
      }
    },
    runtimeChunk: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Caching',
    }),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
}