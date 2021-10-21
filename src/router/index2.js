import Vue from 'vue'
import Router from 'vue-router'
import home from './home'//我的和登录路由
import cinema from './cinema'//电影院路由
import movie from './movie'//电影路由
import Login from '@/views/Home/Login'//登陆页面
import Register from '@/views/Home/Register'//注册页面

import Information from '@/views/Home/Information'//展示用户个人信息以及使用的记录等
import Personal from '@/views/Home/Information/Personal'//我的页面里面的个人中心
import Dongtai from '@/views/Home/Information/Dongtai'//个人中心里面的动态页面
import Like from '@/views/Home/Information/Like'//个人中心里面的喜欢页面
import Project from '@/views/Home/Information/Project'//个人中心的项目页面

import CinemaTicket from '@/views/Home/Order/CinemaTicket'//电影票
import ShowTickets from '@/views/Home/Order/ShowTickets'//演出票
import OnlineViewing from '@/views/Home/Order/OnlineViewing'//在线观影
import Around from '@/views/Home/Order/Around'//周边

import MoviesNotes from '@/views/Home/moviesnotes'//想看 和 看过
import WantSee from '@/views/Home/wantsee'//想看页面
import AlreadySeen from '@/views/Home/alreadyseen'//看过页面
import Film from '@/components/Home/wantseecontent/Film'//电影
import Show from '@/components/Home/wantseecontent/Show'//演出
import TvPlay from '@/components/Home/wantseecontent/TvPlay'//电视剧
import Variety from '@/components/Home/wantseecontent/Variety'//综艺


import Movies from '@/views/Movies/index'//电影页面,默认一进来展示的首页
import Nowplaying from '@/views/Movies/Nowplaying/index'//电影页面下的正在热映
import Detail from '@/views/Movies/Nowplaying/Detail'//电影页面下的正在热映的电影详情信息页面

import Comingsoon from '@/views/Movies/Comingsoon/index'//电影页面下的待上映
import ComingDetail from '@/views/Movies/Comingsoon/ComingDetail'//电影页面下的待上映的电影详情信息页面
import City from '@/views/Movies/City'//电影页面的所在城市的地理定位
import Cinema from '@/views/Cinema/Cinema'//影院信息页面
import CinemaPage from '@/views/Cinema/CinemaPage'//影院信息页面

import Today from '@/components/Cinema/Today'//今天
import Tomorrow from '@/components/Cinema/Tomorrow'//明天
import Aftertomorrow from '@/components/Cinema/Aftertomorrow'//后天
import PlayTime from '@/components/Cinema/PlayTime'//后天




import {Toast}  from 'vant';

Vue.use(Toast)
Vue.use(Router)

const router =  new Router({
  mode:'history',
  routes: [
    {
      path:'*',
      redirect:'/movies',
      meta:{
        showTab:true
      }
    },
    // ----------movies电影页面-----------
    {
      path: '/movies',//电影页面
      component: Movies,
      meta:{
        showTab:true
      },
         children:[
            {
              path:'',
              redirect:'nowplaying',
              meta:{
                 showTab:true
               }
            },
            {
              path:'nowplaying',//正在热映
              component:Nowplaying,
              meta:{
                 showTab:true
               }
            },
            {
              path:'comingsoon',//等待上映
              component:Comingsoon,
              meta:{
                showTab:true
              }
            }
          
         ]
    },
    {
      path:'/comingDetail/:useid',//等待上映的电影详情页信息
      component:ComingDetail,
      meta:{
          showTab:true
      }
    },
    {
      path:'/detail/:id',//电影详情页
      name:'detail',
      component:Detail,
      meta:{
        showTab:false
      }
    },
    {
      path:'/city',//地理位置的城市列表
      name:'city',
      component:City,
      meta:{
        showTab:true
      }
    },
    // -------------home个人中心信息页面-------------
    {
      path: '/login',//登陆页面
      name: 'login',
      component: Login,
      meta:{
        showTab:true
      }
    },
    {
      path:'/register',//注册页面
      name:'register',
      component:Register,
      meta:{
        showTab:true
      }
    },

    {
      path:'/personal',//个人中心
      component:Personal,
         children:[
            {
              path:'',
              redirect:'dongtai'
            },
            {
              path:'dongtai',//动态
              component:Dongtai
            },
            {
              path:'like',//喜欢
              component:Like
            },
            {
              path:'project',//作品
              component:Project
            }
         ]
    },
    {
      path:'/moviesnotes',//想看和看过的记录页面内容
      component:MoviesNotes,
         children:[
            {
              path:'',
              redirect:'wantsee'
            },
            {
              path:'wantsee',//想看
              component:WantSee,
                 children:[
                    {
                      path:'',
                      component:Film
                    },
                    {
                      path:'film',//电影
                      component:Film
                    },
                    {
                      path:'Tvplay',//电视剧
                      component:TvPlay
                    },
                    {
                      path:'show',//演出
                      component:Show
                    },
                    {
                      path:'variety',//综艺
                      component:Variety
                    }
                 ]
            },
            {
              path:'alreadyseen',//看过
              component:AlreadySeen,
                 children:[
                    {
                      path:'film',//电影
                      component:Film
                    },
                    {
                      path:'tvplay',//电视剧
                      component:TvPlay
                    },
                    {
                      path:'variety',//综艺
                      component:Variety
                    },
                 ]
            }
         ]
    },
    // -----------------我的订单------------
    {
       path:'/around',
       component:Around
    },
    {
       path:'/cinematicket',
       component:CinemaTicket
    },
    {
       path:'/onlineviewing',
       component:OnlineViewing
    },
    {
       path:'/showtickets',
       component:ShowTickets
    },

    // ----------cinema影院页面--------
    {
      path: '/cinema',//影院页面
      name: 'cinema',
      component: Cinema,
      meta:{
        showTab:true,
        isBack:false
      }
    },
    {
      path:'/cinemapage/:nameid',
      // name:'cinemapage',
      component:CinemaPage,
     
           children:[
        // 如果你想要渲染点什么，可以提供一个 的空 子路由
             {
                path:"",
                redirect:'today'
             },
             {
                path:"today",
                component:Today
             },
             {
                path:"tomorrow",
                component:Tomorrow
             },
             {
                path:'aftertomorrow',
                component:Aftertomorrow
             }
           ]
    },
    //选座位
    {
      path:'/seatselection',
      name:'seatselection',
      component: ()=>import('@/components/Cinema/SeatSelection'),
      meta:{
        keepAlive:true
      }
    },
    {
      path:"/order",
      name:"order",
      component: ()=>import('@/views/Cinema/Order'),
    },


  ]
})
router.beforeEach((to,from,next)=>{
  if(to.name == 'login'){
    next();
    // console.log("查一下")
  }else{
    // console.log("请先去登陆")
    if(localStorage.getItem('isLogin')==='ok' || localStorage.getItem('phone')){
      next()
    }else{
      next('/login')
      Toast("请先去登陆")
    }
  };


})
export default router;