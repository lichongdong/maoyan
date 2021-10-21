<template>
<div class="cinema-swiper-wrap">
  <div class="cinema-swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
         v-for="(img,index) in info" 
         :key="index"
         :class="img.id==current?'active':''"
         @click="select(img.id)"
          >
          <img :src="img.imgUrl"/>
        </div>
      </div>
    </div>
    <div class="swiper-info"
     v-show="item.id===current"
      v-for="(item,index) in info" 
      :key="index"
      >
        <div class="title">
            <span>{{item.name}}</span>
            <span>{{item.mark_number}}分</span>
        </div>
        <div class="information">
            <span>{{item.duration}}</span>
            <span>|</span>
            <span>{{item.type}}</span>
            <span>|</span>
            <span>{{item.actor}}</span>
        </div>
    </div>
  </div>
</div>
</template>
      

<script>
import cinemaSwiper from 'swiper'
export default{
props:{
  info:Array
},
  data(){
    return{
         current:1,
         isShow:false
    }
  },
  methods:{
      select(imgId){
          this.current = imgId;
          //选中的时候将id存储在本地存储里面
          localStorage.setItem('imgId',imgId)
          let title = JSON.stringify(this.info[imgId-1])
          localStorage.setItem('title',title)
      }


  },
  mounted(){
    
  },
  //需要在updated中使用swiper
  updated(){
       var swiper = new cinemaSwiper('.swiper-container', {
        slidesPerView: 3,
        slidesOffsetBefore : 100,
        slidesOffsetAfter :50,
        spaceBetween: 10,
        // slideToClickedSlide:true,
    });
  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.cinema-swiper{
     border-bottom:1px solid #ccc;
    .swiper-container{
      padding:20px 0;
      background-image:url('../../../assets/images/background.jpg');
    }
}
.swiper-slide{
  width:100px!important;
  height:125px;
  img{
    width:100px;
    height:125px;
  }
}
.swiper-slide:before{
content: '';
    width: 0;
    height: 0;
    background-color:pink;
    margin-top:10px;
}
.active{
  border:3px solid #fff;
}
.swiper-info{
  text-align: center;
  padding:10px 0;
  .title{
    span:nth-child(1){
        font-weight: 600;
        font-size:18px;
    }
    span:nth-child(2){
        font-weight:700;
        font-size:@font-xs;
        color:@color;
    }
  }
}
.information{
    margin-top:10px;
    font-size:@font-mini;
}

</style>