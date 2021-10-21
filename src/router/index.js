import Vue from 'vue'
import Router from 'vue-router'
import home from './home'//我的和登录路由
import cinema from './cinema'//电影院路由
import movie from './movie'//电影路由
import order from './order'//订单路由

Vue.use(Router)
//保存所有路由
const routes = [
    ...home,
    ...movie,
    ...cinema,
    ...order
]
/**
 * @desc 创建路由
 */
const router =  new Router({
  routes,
  mode:'hash'
})
router.beforeEach((to,from,next)=>{
  //统一处理页面title
  document.title = to.meta.title
  next()

})
export default router;