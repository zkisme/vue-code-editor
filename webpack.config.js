let webpack = require("webpack");
let HTMLWebpackPlugin = require("html-webpack-plugin");
let path = require("path");

module.exports = {
    entry: "./example/index.js",
    output: {
        path: path.resolve('./example'),
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    externals:{
        vue:'Vue'
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:'dev'
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress:{
        //         warnings:false
        //     }
        // }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HTMLWebpackPlugin({
            template:'example/index.html',
            filename:'index.html'
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,'./example'),
        compress:true,
        port:9090
    }
};
