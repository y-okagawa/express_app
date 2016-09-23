module.exports = {
  entry: {
    salary_input_table: "./src/salary_input_table.js"
  },
  output: {
    filename: 'bundle.js',
    path: "./public/javascripts/build",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
