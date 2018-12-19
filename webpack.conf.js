const path =require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        libraryExport: "default",
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
        }]
    }
}
