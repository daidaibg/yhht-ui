/*
 * @Author: daidai
 * @Date: 2021-09-09 17:19:05
 * @LastEditors: daidai
 * @LastEditTime: 2022-02-10 10:47:05
 * @FilePath: \yhht-ui\vue.config.js
 */
const path = require('path')
// const CompressionPlugin = require('compression-webpack-plugin') //npm install --save-dev compression-webpack-plugin插件需要npm安装

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '/yhht-ui', //基本路径
    outputDir: 'dist', //输出文件目录
    assetsDir: 'static', //css js 等静态文件目录
    // lintOnSave: 'error', // 设置eslint报错时停止代码编译
    lintOnSave: false,
    productionSourceMap: false, // 不需要生产环境的 source map（减小dist文件大小，加速构建）
    devServer: {
        // open: true,  // npm run serve后自动打开页面
        // host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
        port: 8989, // 开发服务器运行端口号
        // proxy: {
        //     '/api': {
        //         target: process.env.VUE_APP_BASE_URL, // 代理接口地址
        //         secure: false,  // 如果是https接口，需要配置这个参数
        //         changeOrigin: true, // 是否跨域
        //         pathRewrite: {
        //             '^/api': ''   //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
        //         }
        //     }
        // }
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract:  false,//是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
        sourceMap: false,//是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
        loaderOptions: {
          sass: {
            prependData: `@import "@/assets/css/variable.scss";`
          }
        },
        requireModuleExtension: true,
      },
    chainWebpack: (config) => {
        // 移除 prefetch 插件(针对生产环境首屏请求数进行优化)
        config.plugins.delete('prefetch')
        // 移除 preload 插件(针对生产环境首屏请求数进行优化)
        config.plugins.delete('preload')
        config.resolve.alias
            .set('@views', resolve('./src/views'))
            .set('@router', resolve('./src/router'))
            .set('@store', resolve('./src/store'))
            .set('@assets', resolve('./src/assets'))
            .set('@lib', resolve('./src/lib'))
    },
    // 配置打包 js、css文件为.gz格式，优化加载速度  （参考：https://blog.csdn.net/qq_31677507/article/details/102742196）
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return {
    //             plugins: [new CompressionPlugin({
    //                 test: /\.js$|\.css/, // 匹配文件
    //                 threshold: 10240, // 超过10kB的数据进行压缩
    //                 deleteOriginalAssets: false // 是否删除原文件 （原文件也建议发布到服务器以支持不兼容gzip的浏览器）
    //             })],
    //             performance: { // 生产环境构建代码文件超出以下配置大小会在命令行中显示警告
    //                 hints: 'warning',
    //                 // 入口起点的最大体积 整数类型（以字节为单位,默认值是：250000 (bytes)）
    //                 maxEntrypointSize: 5000000,
    //                 // 生成文件的最大体积 整数类型（以字节为单位,默认值是：250000 (bytes)）
    //                 maxAssetSize: 3000000
    //                 // // 只给出 js 文件的性能提示
    //                 // assetFilter: function (assetFilename) {
    //                 //   return assetFilename.endsWith('.js')
    //                 // }
    //             }
    //         }
    //     }
    // }
}
