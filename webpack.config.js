const path = require('path');

module.exports = {
  entry: './src/app.js', // Tell Webpack where your app starts
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: './public',
    historyApiFallback: true, // Redirige toutes les requêtes vers index.html
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // optional if you're using Babel
      },
    ],
  },
};
