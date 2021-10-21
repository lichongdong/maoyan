// 导入mock文件
const home = require('./home')
/**
 * @desc mock注册入口
 * @param { Object } app express 实例
 */
module.exports = app => {
  // 注册首页相关路由
  home(app)
}