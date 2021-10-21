const mockApi = require('./src/mock')
const express = require('express')
// 配置
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
// 导出配置
module.exports = {
  publicPath:'./',
  devServer: {
   before(app) {
    // 配置解析参数
    app.use(express.urlencoded({ extend: true }))
    app.use(express.json())
    // 注册mock服务
    mockApi(app)
   },
   // host: '0.0.0.0',
   // port: 8080,
  //  proxy: {}
  },
  css: {// 配置css px 转 rem
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ["*"],
            "selectorBlackList":["van-"]   //排除vant框架相关组件
          })
        ]
      }
    }
  }
}