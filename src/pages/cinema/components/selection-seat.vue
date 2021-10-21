<template>
<div class="selection-seat-list">
    <MainHeader :showBack="true" :title="title.movie_shop"/>
    <SelectSeatTitle :info="selectList" />
    <SeatDisplayArea :info="seatList"/>
    <Footer :info="seatList"></Footer>
</div>
</template>

<script>
import SelectSeatTitle from './selection-seat-title'
import SeatDisplayArea from './seat-display-area'
import Footer from './footer'
export default{
  data(){
    return{
       title:'',
       selectList:{},
       seatList:[],
    }
  },

  methods:{
    loadInfo(){
         let ids = this.$route.params.id
        this.$axios.get('/api/selectList').then((res)=>{
          this.selectList = res.data.data.CPageList[ids]
          // console.log(this.selectList)
      })
    },
    seatInfo(){
        this.$axios.get('/api/seatList').then((res)=>{
            this.seatList = res.data.data.seatList
        })
    },
 
  },
  mounted(){
    this.loadInfo()
    this.seatInfo()
    this.title = JSON.parse(localStorage.getItem('list'))
  },
  components:{
    SelectSeatTitle,
    SeatDisplayArea,
    Footer
  }



}
</script>

<style lang="less" scoped>

</style>