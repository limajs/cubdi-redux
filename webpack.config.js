var path = require("path");  
var webpack = require('webpack');

module.exports = {  
 entry: [
   'webpack-dev-server/client?http://localhost:3000',
   'webpack/hot/only-dev-server',
   './src/index.jsx'
 ],
 module: {
   loaders: [{
     test: /\.jsx?$/,
     exclude: /node-modules/,
     include: path.join(__dirname, "src"),
     loader: 'react-hot!babel'
   }]
 },
 resolve: {
   extensions: ['', '.js', '.jsx']
 },
 output: {
   path: __dirname + '/dist',
   publicPath: '/',
   filename: 'bundle.js'
 },
 devServer: {
  contentBase: './dist',
  hot: true,
  port:3000
 },
 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
};