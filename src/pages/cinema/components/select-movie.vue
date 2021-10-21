<template>
<div class="select-movie">
    <MainHeader :showBack="true"/>
    <TicketInfo/>
    <CinemaSwiper :info="selectList" />
    <PlayTime/>
</div>
</template>

<script>
import TicketInfo from './ticket-nfo'
import CinemaSwiper from './cinema-swiper'
import PlayTime from './play-time'
export default{
  data(){
    return{
        selectList:[]
    }
  },

  methods:{
    loadInfo(){
      this.$axios.get('/api/selectList').then((res)=>{
          this.selectList = res.data.data.CPageList
      })
    },

  },
  mounted(){
    this.loadInfo();
  },
  components:{
    TicketInfo,
    CinemaSwiper,
    PlayTime
  }



}
</script>

<style lang="less" scoped>

</style>