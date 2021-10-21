import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import "@/assets/css/common.css"
import '@/assets/font/iconfont.css'
import '@/assets/font/movie/iconfont.css'
import '@/assets/font/home/iconfont.js'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
import axios from 'axios'
import Swiper from "swiper"
import './vant' // 引入UI库
import 'vant/lib/index.css';
import 'amfe-flexible'
import less from 'less'
import Vant from 'vant';


// 引入mockjs
Vue.use(less)
Vue.use(Vant)


Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.config.devtools = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
