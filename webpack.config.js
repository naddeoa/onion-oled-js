// Webpack is used to easily bundle and test on the device via the Makefile
module.exports = {
    entry: "./test.js",
    output: {
        path: __dirname,
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    externals: {
        "child_process": "require('child_process')"
    }
};