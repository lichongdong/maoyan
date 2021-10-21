<template>
  <div class="nowplaying-wrap">
  		<Swiper />
      <NowplayingList 
      :info="moviesList"
      />
  </div>
</template>

<script>
import Swiper from './nowplaying-swiper'
import NowplayingList from './nowplaying-list'
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
  	Swiper,
    NowplayingList
  }


}
</script>

<style lang="less" scoped>
.nowplaying-wrap{
  padding-bottom:50px;
}
</style>

