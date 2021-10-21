<template>
<div class="cinema-wrap">
    <ul class="list-wrap">
        <li class="item" 
        v-for="item in cinemaList" 
        :key="item.id"
        @click="buyTicket(item)"
        >
        <div class="address">
            <span>{{item.movie_shop}}</span>
            <span>{{item.address}}</span>
        </div>
        </li>
    </ul>
</div>
</template>

<script>

export default{
  data(){
    return{
         cinemaList:[]
    }
  },

  methods:{
      loadInfo(){
        this.$axios.get('/api/cinemaList').then((res)=>{
            this.cinemaList = res.data.data.cinema_list;
        })
      },
      buyTicket(arrList){
        let list = JSON.stringify(arrList);
            localStorage.setItem('list',list)
        // console.log(item)
          this.$router.push({
              path:'/select-movie',
          })

      }
  },
  mounted(){
    this.loadInfo();
  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.cinema-wrap{
  .list-wrap{
    .flex();
    padding:10px 0px 10px 16px;
    flex-direction: column;
    .item{
      .flex(space-between);
      padding:10px 10px;
      border-bottom:1px solid #ccc;
    }
  }
}
.address{
  .flex();
  flex-direction: column;
  span:nth-child(1){
    font-size:@font-xs;
    font-weight: 800;
  }
  span:nth-child(2){
    margin-top:10px;
    font-size:@font-mini;
    display:-webkit-box;
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:1;
    -webkit-box-orient:vertical;
  }
}

</style>