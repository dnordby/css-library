var ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractSCSS = new ExtractTextPlugin('./vpv-normalizer.css');
module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: 'css/',
        filename: "app.js"
    },
    module: {
        loaders: [
            {
              test: /app\.scss$/,
              loader: extractSCSS.extract(['css', 'autoprefixer', 'sass'])
            }
        ]
    },
    plugins: [
      extractSCSS
    ]
};
