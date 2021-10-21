<template>
<div class="cinema-list">
    <CinemaHeader/>
    <CinemaList/>
</div>
</template>

<script>
import CinemaHeader from '@/components/cinema/CinemaHeader'
import CinemaList from './components/cinema-list'
export default{
  data(){
    return{

    }
  },

  methods:{
    
    

  },
  components:{
      CinemaHeader,
      CinemaList
  }



}
</script>

<style lang="less" scoped>
.cinema-list{
  // background-color:pink;
}
</style>