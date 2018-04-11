const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.ts",
  output: {
    filename: "./bundle.js"
  },
  resolve: {
    // Add '.ts' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".js", ".css", ".scss"]
  },
  module: {
    rules: [
      // all files with a '.ts' extension will be handled by 'ts-loader'
      {
        test: /\.ts?$/,
        use: [  
          { loader: "ts-loader"}
        ]
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("/styles/main.css")
  ]
}
