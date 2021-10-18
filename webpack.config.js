const HtmlWebpackPlugin = require('html-webpack-plugin');
const DeadCodePlugin = require('webpack-deadcode-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => {

  let config = {};

  config.mode = env.mode || 'none';

  // Entries
  config.entry = {
    printMe: './src/print.js',
    index: './src/index.js'
  };

  // Individual modules and loader rules
  config.module = {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  };

  // Plugins
  config.plugins = [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ];

  if (env.mode === 'development') {
    config.plugins.push(new BundleAnalyzerPlugin({
      generateStatsFile: true
    }));
  }

  // Output
  config.output = {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  };

  //Dev related
  config.devtool = 'inline-source-map';
  config.devServer = {
    static: './dist'
  }

  if (env && env.checkUnused) {
    config.plugins.push(
      new DeadCodePlugin({
        patterns: ['src/**/*.(js|jsx|css|png|jpg|jpeg)']
      })
    );
  }

  return config;
}
