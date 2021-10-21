<template>
<div class="ticket-nfo-wrap">
    <header>
        <span class="title" @click="goBack()">看电影</span>
        <van-icon size="12" name="arrow" />
        <span class="title">{{info.movie_shop}}</span>
    </header>
    <div class="cinema-address">
        <div class="address">
            <span>{{info.movie_shop}}</span>
            <span>{{info.address}}</span>
        </div>
        <div class="location">
            <van-icon name="location-o" />
        </div>
    </div>
</div>
</template>

<script>

export default{
props:{
  
},
  data(){
    return{
        info:{}
    }
  },

  methods:{
    goBack(){
      this.$router.push({
        path:'/'
      })
    }  
  },
  created(){
    // const { movie_shop,address } = this.info
    this.info = JSON.parse(localStorage.getItem('list'))
    // console.log(this.info)
  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.ticket-nfo-wrap{
  .padding2();1
   header{
      font-size:@font-mini;
      padding-bottom:5px;
      .flex();
      align-items:center;
    }
}
.cinema-address{
    .flex();
    .address{
      flex:1;
      margin-right:30px;
      .flex(space-around);
      flex-direction: column;
      border-right:1px solid #ccc;
      span:nth-child(1){
        font-size:@font-xs;
        font-weight: 800;
      }
      span:nth-child(2){
        font-size:@font-mini;
        display:-webkit-box;
        overflow:hidden;
        text-overflow:ellipsis;
        -webkit-line-clamp:1;
        -webkit-box-orient:vertical;
      }
    }
}
.location{
  .van-icon{
      line-height:46px;
  }

}
.title{
  font-size:@font-mini;
}
</style>