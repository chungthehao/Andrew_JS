const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        // path: 'H:\\_Hoc_Andrew_Modern_JS\\boilerplate\\public\\scripts'
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundlewebpack.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env'
                        ]
                    }
                }
            },

        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), // Serve ở đâu là root, ở public
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
}