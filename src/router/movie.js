/**
 * @desc 首页电影和登录页面路由
*/
import Movie from '../pages/movie';
import Nowplaying from '../pages/movie/nowplaying';
import Comingsoon from '../pages/movie/comingsoon';
import MovieDetail from '../pages/movie/nowplaying/movie-detail';
import MoviesDetail from '../pages/movie/comingsoon/movies-detail';
import City from '../pages/movie/city';

//首页电影页面路由
export default [
  {
      path:'*',
      redirect:'/movies/nowplaying',
      showTab:true
  },
	{
      path:'/movies',
      name:'Movie',
      component:Movie,
      meta:{
        title:'首页',
        showTab:true
      },
      children:[
            {
              path:'nowplaying',//正在热映
              component:Nowplaying,
              meta:{
                title:'正在热映',
                showTab:true
              }
            },
            {
              path:'comingsoon',//即将上映
              component:Comingsoon,
              meta:{
                title:'即将上映',
                showTab:true
              }
            },

          
         ]
  },
  {
    path:'/movie-detail',
    name:'MovieDetail',
    component:MovieDetail,
    meta:{
      title:'电影详情页',
      showTab:false
    }
  },
    {
    path:'/movies-detail',
    name:'MoviesDetail',
    component:MoviesDetail,
    meta:{
      title:'电影详情页',
      showTab:false
    }
  },
  {
    path:'/city',
    name:'City',
    component:City,
    meta:{
      title:'选择城市',
      showTab:false
    }
  }
]