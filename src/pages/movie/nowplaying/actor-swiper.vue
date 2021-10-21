<template>
<div class="actor-swiper-wrap">
  <div class="title-wrap">
      <div class="title-wrap-left">
          <span>演职人员</span>
      </div>
      <div class="title-wrap-right">
          <span>全部</span>
          <span class="iconfont icon-jiantou1"></span>
      </div>
  </div>
  <div class="swiper-container" :key="actorImgList.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in actorImgList" :key="img.id">
          <img :src="img.imgUrl" alt=""/>
          <p>{{img.title}}</p>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import actorSwiper from 'swiper'
export default{
  data(){
    return{
         actorImgList:[]
    }
  },

  methods:{
       loadInfo(){
          this.$axios.get('/api/seller').then((res)=>{
            if(res.data.data.errorCode == 0){
              this.actorImgList = res.data.data.actorList
            }
          })
       } 
  },
  mounted(){
      this.loadInfo();
  },
  //需要在updated中使用swiper
  updated(){
    new actorSwiper('.swiper-container',{
       loop:true,
       slidesPerView:3.2,
       spaceBetween:5,
    })
  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.actor-swiper-wrap{
  .padding2();
}
.title-wrap{
  .flex(space-between);
  font-size:@font-mini;
  color:#ccc;
  .title-wrap-left{
      color:white;
  }
}
.icon-jiantou1{
  font-size:@font-mini;
}
.swiper-container{
  margin-top:20px;
}
.swiper-slide{
  width:80px;
  height:140px;
  text-align: center;
  font-size:@font-mini;
  color:white;
}
img{
  width:80px;
  height:112px;
}
 




</style>