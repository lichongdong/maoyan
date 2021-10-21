<template>
  <div class="movies_conent" >
      <MainHeader :showBack="false"/>
      <MoviesHeader :city="city"></MoviesHeader>
      <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import MoviesHeader from '@/components/movies/MoviesHeader'
export default {
   data(){
        return{
            movieslist:[],
            city:"",
            isFixed:false,
        }
   },

  methods:{
      loadInfo(){

          
      }
  },
  mounted(){
      this.loadInfo();
      const { cityName,hotName } = this.$route.query
      if(cityName){
          this.city = cityName;
      }
      if(hotName){
          this.city = hotName;
      }

  },

   components:{
     MoviesHeader
   }

}
</script>

<style lang="less" scoped>
@import '../../less/index.less';
.movies_conent{
  width:100vw;
  height:100vh;
}


</style>