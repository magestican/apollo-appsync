const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    modules: [
      'app', 'node_modules'
    ],
    extensions: [
      '.js', '.jsx', '.react.js'
    ],
    mainFields: ['browser', 'jsnext:main', 'main']
  },

};
