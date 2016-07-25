var path = require("path");

module.exports = {
  entry: {
    app: ["./app/js/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015']
          }
        },

        // debug=true will wrap RamdaJs functions in error handlers with file name, line number and char location
        {
          test: /\.js$/,
          exclude:/(node_modules|bower_components)/,
          loader: 'ramda-loader?debug=true'
        }
      ]
    }
};

