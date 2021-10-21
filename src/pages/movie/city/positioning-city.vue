<template>
<div class="positioning-city">
    <div class="location-wrap">
          <div class="location">
              <div class="item">
                  <span>定位城市</span>
              </div>
              <div class="location-btn">
                  <van-button type="default" size="small">深圳</van-button>
              </div>
          </div>
          <div class="location">
              <div class="item">
                  <span>最近访问城市</span>
              </div>
              <div class="btn-wrap">
                  <van-button type="default" size="small">深圳</van-button>
              </div>
          </div>
          <div class="location">
              <div class="item">
                  <span>热门城市</span>
              </div>
              <div class="btn-wrap">
                  <van-button 
                  type="default" 
                  size="small" 
                  @click="hotCity(item.hot_name)"
                  v-for="(item,index) in hotCityList" 
                  :key="index">
                  {{item.hot_name}}
                  </van-button>
              </div>
          </div>
    </div>
</div>
</template>

<script>
export default{
  data(){
    return{
         hotCityList:[]
    }
  },
  methods:{
      loadInfo(){
          this.$axios.get('/api/cityList').then((res)=>{
              if(res.data.data.errorCode == 0){
                  this.hotCityList = res.data.data.hot_city;
              }
          })
      },
      hotCity(hotName){
        this.$router.push({
          path:'/',
          query:{hotName}
        })
      }
  },
  mounted(){
    this.loadInfo()
  }
}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.location{
    .item{
      background-color:#f3f3f3;
      .padding2(5px,16px);
      font-size:@font-mini;
    }
    .location-btn{
      .padding2();
      .flex(space-around);
      justify-content: flex-start;
      flex-wrap:wrap;
      .van-button{
       .padding2(15px,20px);
       margin-right:20px;
      }
    }
}
.btn-wrap{
  .padding2();
  .flex(space-around);
  justify-content: flex-start;
  flex-wrap:wrap;
  .van-button{
   .padding2(15px,20px);
   margin-right:20px;
   margin-bottom:20px;
  }
}
.van-button--mini+.van-button--mini{
    margin-left:0;
}
</style>