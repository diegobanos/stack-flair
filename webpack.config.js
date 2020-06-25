module.exports = {
    mode: 'production',
    entry: './src/StackFlair.jsx',
    output: {
        filename: 'StackFlair.js',
        libraryTarget: 'commonjs2'
    },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
