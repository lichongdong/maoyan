<template>
  <div class="movie-detail-wrap">
      <MainHeader :showBack="false" :title="title.movies_title"/>
      <MovieInfo 
      :title="title.movies_title"
      :list="detail_list"
      />
      <MovieIntroduction :info="detail_list"/>
      <ActorSwiper/>
      <Comment/>
      <van-button class="button" size="large">购票</van-button>
  </div>
</template>

<script>
import MovieInfo from './movie-info'
import MovieIntroduction from './movie-introduction'
import ActorSwiper from './actor-swiper'
import Comment from './comment-list'
export default{
  data(){
    return{
         title:"",
         detail_list:[]
    }
  },

  methods:{

    

  },
  mounted(){
      const {id,title} = this.$route.query
      // console.log(id,title)
      this.$axios.get('/api/seller').then((res)=>{
        if(res.data.data.errorCode == 0){
          this.title = res.data.data.movies_list[id-1]
          // console.log(this.title.detail_list)
          this.detail_list = this.title.detail_list
        }
      })
  },
  components:{
    MovieInfo,
    MovieIntroduction,
    ActorSwiper,
    Comment
  }



}
</script>

<style lang="less" scoped>
.movie-detail-wrap{
    background-color:#66292B;
}
.button{
  width:100vw;
  height:38px;
  background-color:#e54847;
  position:fixed;
  bottom:0;
  left:0;
  z-index:200;
  color:white;
}
</style>