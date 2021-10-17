const HtmlWebpackPlugin = require('html-webpack-plugin');
const DeadCodePlugin = require('webpack-deadcode-plugin');
const path = require('path');

module.exports = (env) => {
  let config = {
    mode: 'none',
    entry: {
      printMe: './src/print.js',
      index: './src/index.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist'
    }
  };

  if (env && env.checkUnused) {
    config.plugins.push(
      new DeadCodePlugin({
        patterns: ['src/**/*.(js|jsx|css|png|jpg|jpeg)']
      })
    );
  }

  return config;
}
