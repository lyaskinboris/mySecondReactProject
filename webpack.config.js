module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/build',
        publicPath: "/build/"
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react']
                    }
                },
                exclude: [/node_modules/, /dist/]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                ],
                exclude: [/node_modules/, /dist/]
            }
        ]
    },
//    devtool: "eval",
    devServer: {
        contentBase: __dirname + '/public',
        inline: true,
        port: 3000
    }
};