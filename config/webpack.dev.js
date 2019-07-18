const path = require("path")
module.exports = {
    // 入口文件可以有多个，多个的时候用数组的形式写
    entry: {
        main: "./src/main.js"
    },

    // 打包环境：开发/生产
    mode: "development",

    // 出口，只能有一个
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/'     // 公开路径
    },

    // 配置本地服务器
    devServer: {
        contentBase: "dist"     // 默认是dist
    }
}