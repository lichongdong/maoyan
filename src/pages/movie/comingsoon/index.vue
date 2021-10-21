<template>
  <div class="nowplaying-wrap">
  		<ComingsoonSwiper />
      <ComingsoonList 
      :info="moviesList"
      />
  </div>
</template>

<script>
import ComingsoonSwiper from './comingsoon-swiper'
import ComingsoonList from './comingsoon-list'
export default{
	data(){
		return{
        moviesList:[]
		}
	},

   methods:{

  },
  mounted(){
      this.$axios.get('/api/seller').then((res)=>{
            if(res.data.data.errorCode == 0){
                this.moviesList = res.data.data.movies_list
            }
            
            
      })
  },
  components:{
  	ComingsoonSwiper,
    ComingsoonList
  }


}
</script>

<style lang="less" scoped>
.nowplaying-wrap{
  padding-bottom:50px;
}
</style>

