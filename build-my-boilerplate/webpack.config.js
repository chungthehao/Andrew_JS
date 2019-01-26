const path = require('path') // import module 'path'

// COMMONJS MODULES
module.exports = {
    entry: './src/index.js', // Nguồn chạy đầu tiên, nó import module nào thì lôi vào sau
    output: {
        // Cần chỉ ra đường dẫn tuyệt đối, cách tổng quát chỉ để chuyển qua máy khác, OS vẫn chạy ok
        // path: 'H:\\_Hoc_Andrew_Modern_JS\\boilerplate\\public\\scripts'
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundlewebpack.js' // Tùy chỉnh tên file (là file sẽ đc load ở file index.html)
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Chỉ chạy những file javascript (dùng regex lọc)
                exclude: /node_modules/, // Ko chạy babel-loader cho mấy file trong folder này
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
        publicPath: '/scripts/' // Lúc code ở local, nó chạy ảo, xóa file js mà load ở index.html nó vẫn chạy bth, nên cần chỉ rõ thư mục?!
    },
    devtool: 'source-map' // Để browser báo đúng dòng code mình đã viết, chứ ko phải cái đã compiled
}