var path = require("path");
require("foundation-sites-loader");

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

        // **IMPORTANT** This is needed so that each foundation js file required by
        // foundation-webpack has access to the jQuery object
        { test: /foundation\/js\//, loader: 'imports?jQuery=jquery' },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015'],
            plugins: ['lodash']
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

