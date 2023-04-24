
// global.Buffer = require('buffer').Buffer;
const webpack = require("webpack");

// const buffer = Buffer.from('\r');

const path = require('path');

module.exports = {

  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],})],

  entry: './src/script.js', // Main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.csv$/,
        use: 'csv-loader',
      },
    ],
  },
};




// module.exports.Command;

      // webpack.config.js
// const webpack = require("webpack");

// module.exports = {
//   plugins: [
//     new webpack.ProvidePlugin({
//       Buffer: ['buffer', 'Buffer'],
//     }),
//     // ..
//   ]
//   // ..
// }