module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclue: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};