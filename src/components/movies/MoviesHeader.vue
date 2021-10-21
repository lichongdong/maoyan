<template>
    <div class="movie-header">
        <ul>
            <li @click="toCity()">
            <span>{{city}}</span>
            <i class="iconfont icon-jiantouarrow486"></i>
            </li>
            <div class="center">
                <router-link to="/movies/nowplaying" tag="li" activeClass="active">正在热映</router-link>
                <router-link to="/movies/comingsoon" tag="li" activeClass="active">即将上映</router-link>
            </div>
            <li>
                <van-icon name="search" size="20"/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        city:String
    },
   data(){
        return{
            // city:''
        }
   }, 
   methods:{
        toCity(){
            this.$router.push({
                path:'/city'
            })
        }
   } 

}
</script>

<style lang="less" scoped>
@import '../../less/index.less';
 .movie-header{
  width:100%;
  height:44px;
  border-bottom:1px solid #ccc;
  background-color:white;
    ul{
    height:44px;
    .flex();
    justify-content:center;
    align-items:center;
    font-size:@font-xs;
        li:nth-child(1){
            margin-right:20px;
        }
  }
}  
 .center{
  display:flex;
  justify-content:space-around;
 }
 .center >li{
  height:44px;
  flex:1;
  line-height: 44px;
  margin-right:25px;
 }
 .active{
   color:red;
   border-bottom:1px solid red;
 }
</style>
<style>
.van-icon{
  line-height: 44px;
}
</style>
