const path = require('path');

module.exports = {
  entry: './src/script.js', // Replace this with the path to your main JavaScript file
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

