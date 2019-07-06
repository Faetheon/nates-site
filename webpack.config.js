const path = require('path');

const SRC_DIR = path.join(__dirname, '/react/src');
const DIST_DIR = path.join(__dirname, '/react/dist');

console.log(SRC_DIR)
module.exports = {
  mode: process.env.MODE || "development",
  entry: path.join(__dirname, '/react/src'),
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
}