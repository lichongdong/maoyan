
<template>
<div class="swiper">
    <span>最受好评电影</span>
    <div class="swiper-container" :key="imgList.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgList" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import nowplayingSwiper from 'swiper'
export default{
  data(){
    return{
      imgList:[]
    }
  },
  methods:{
  },
  created(){

      this.$axios.get('/api/seller').then((res)=>{
          this.imgList = res.data.data.imgList
      })
  },
  //需要在updated中使用swiper
  updated(){
    new nowplayingSwiper('.swiper-container',{
       loop:true,
       slidesPerView:3.2,
       spaceBetween:5,
    })
  }
}
</script>
<style lang="less" scoped>
@import '../../../less/index.less';
.swiper{
  .padding2();
  .boxShadow();
  span{
    font-size:@font-mini;
    display:block;
    margin-bottom:10px;
  }
  .swiper-slide{
      width:90px;
      height:150px;
      text-align: center;
      img{
        width: 85;
        height:115px;
      }
      p{
        font-size:@font-mini;
      }
  }

}


</style>