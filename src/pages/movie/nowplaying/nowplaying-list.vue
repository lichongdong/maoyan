<template>
<div class="movies-list-wrap">
    <div class="movies-list" v-for="item in info" :key="item.item_id" @click="goMovieDetail(item.item_id,item.movies_title)">
        <div class="img-wrap">
            <van-image
            width="64"
            height="90"
            fit="cover"
            :src="item.imgUrl"
            />
        </div>
        <div class="movies-info">
            <span>{{item.movies_title}}</span>
            <span>{{item.mark_title}}<p>{{item.mark_number}}</p></span>
            <span>主演:{{item.movies_role}}</span>
            <span>{{item.show_info}}</span>
        </div>
        <div class="btn-wrap">
            <van-button type="info" size="mini" v-if="item.isBuy=='true'">售票</van-button>
            <van-button type="primary" size="mini" v-else="item.isBuy=='false'">预售</van-button>
        </div>
  </div>
</div>
</template>
<script>
export default{
  props:{
    info:Array
  },
  data(){
    return{
         isBuy:true
    }
  },
  methods:{
      goMovieDetail(id,title){
        this.$router.push({
          path:'/movie-detail',
          query:{id,title}
        })
          

      }
      
    

  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.movies-list-wrap{
  .movies-list{
  .padding2();
  .flex(space-between);
    .movies-info{
      width:130px;
       .flex(space-around);
        flex-direction: column;
        margin-right:50px;
         span:nth-child(1){
            font-weight: 800;
          }
          span:nth-child(2){
            display:flex;
          }
         span{
          font-size:@font-mini;
          display:flex;
          display:block;
          white-space:nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
            p{
            font-weight: 800;
            color:#faaf00;
            // margin-left:4px;
          }
        } 
      }

  }
}
.btn-wrap{
  padding-top:20px;
}

</style>
<style>

</style>


