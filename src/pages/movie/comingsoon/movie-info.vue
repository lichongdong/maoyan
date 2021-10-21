<template>
  <div class="movies-info-wrap">
    <header>
      <span @click="goBack()">看电影</span>
      <van-icon size="18" name="arrow" />
      <span>{{title}}</span>
    </header>
    <div class="movies-info" v-for="item in list" :key="item.id">
        <van-image
        width="100"
        height="130"
        :src="item.imgUrl"
        />
        <div class="left">
            <div class="left-top-wrap">
                <h5>{{item.detail_title}}</h5>
                <span>{{item.type}}</span>
                <span>{{item.detail_role}}</span>
                <span>{{item.movies_releasetime}} {{item.movies_address}} {{item.movies_playtime}}</span>
            </div>
            <div class="btn-wrap">
                <div class="item">
                    <span class="iconfont icon-aixin"></span>
                    <span>想看</span>
                </div>
                <div class="item">
                    <span class="iconfont icon-star"></span>
                    <span>看过</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default{
props:{
  title:String,
  list:Array
},
  data(){
    return{

    }
  },

   methods:{
      goBack(){
        this.$router.push({
          path:'/'
        })
      }
  
  }




}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.movies-info-wrap{
    .padding2();
    header{
      font-size:@font-mini;
      padding-bottom:5px;
      .flex();
      align-items:center;
      color:#ccc;
    }
    .movies-info{
        .flex();
        .left{
          margin-left:10px;
          flex:1;
          .flex();
          flex-direction: column;
          .left-top-wrap{
            .flex();
            flex-direction: column;
              span{
                font-size:@font-mini;
                margin-top:5px;
                color:#ccc;
              }
          }

        }
    }
}
.btn-wrap{
    .flex();
    margin-top:10px;
  }
.item{
    .flex();
    flex:1;
    justify-content: center;
    background-color:pink;
    border-radius:10px;
    margin-left:5px;
    padding:5px;
    background:hsla(0,0%,100%,.35);
    span{
      font-size:@font-mini;
      margin-left:3px;
      color:white;
    }
    span:nth-child(1){
      margin-top:2px;
    }
}
h5{
  color:white;
}
</style>