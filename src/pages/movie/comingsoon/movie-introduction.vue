<template>
  <div class="movie-introduction">
      <div class="brief-introduction">
          <div class="title-wrap">
              <span class="title-left">简介</span>
              <div class="title-right" v-show="isShow"  @click="showContent()">
                  <span>展开</span>
                  <span class="iconfont icon-arrowRight-copy"></span>
              </div>
               <div class="title-right" v-show="!isShow" @click="showContent()">
                  <span>收起</span>
                  <span class="iconfont icon-jiantoushang"></span>
              </div>
          </div>
          <div class="introduction-content" v-for="item in info" :key="item.id" >
              <p v-show="isShowContent">{{item.brief_introduction}}</p>
              <p v-show="!isShowContent">{{item.brief_introduction}}</p>
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
         isShow:true,
         isShowContent:true
    }
  },

  methods:{
      showContent(){
        this.isShow = !this.isShow
        this.isShowContent = !this.isShowContent
      }
    

  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.movie-introduction{
  .padding2();
}
.title-wrap{
  .flex(space-between);
  font-size:@font-mini;
  color:#ccc;
  .title-left{
      color:white;
  }
}
.introduction-content{
  margin-top:20px;
  font-size:@font-mini;
  color:white;
  p:nth-child(1){
    display:-webkit-box;
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
  }
}
.icon-arrowRight-copy,.icon-jiantoushang{
    font-size:@font-mini;
}
</style>