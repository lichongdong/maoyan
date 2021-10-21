<template>
<div class="playtime">
  <div class="playtime-wrap">
    <van-tabs @click="onClick" >
      <van-tab 
      v-for="(item,index) in tabs" 
      :title="item"
      :key="index"
      >
      <ul class="info-list"
       v-for="(info,index) in buyList" 
       :key="index"
       >
        <li>
          <span>{{info.play_time}}</span>
          <span>{{info.end_time}}散场</span>
        </li>
        <li>
          <span>{{info.play_type}}</span>
          <span>{{info.hall}}</span>
        </li>
        <li>
          <span>&yen;{{info.price}}</span>
        </li>
        <li>
          <van-button type="danger" size="mini" @click="goSeatSelect(index,info)">购票</van-button>
        </li>
      </ul>
      </van-tab>
    </van-tabs>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default{
  data(){
    return{
         tabs:[],
         buyList:[]
    }
  },
  methods:{
      loadInfo(){
          this.$axios.get('/api/selectList').then((res)=>{
            // console.log(res)
            this.buyList = res.data.data.CPageList
          })
      },
      onClick(timeId){
        // console.log(value)
        localStorage.setItem('timeId',timeId)
      },
      goSeatSelect(buyId,info){

        localStorage.setItem('data',JSON.stringify(info));
        if(!localStorage.getItem('imgId')){
          Toast('请选择想看的电影')
        }else if(!localStorage.getItem('timeId')){
          Toast('请选择日期')
        }else{
          Toast.loading({
          message: '座位加载中...',
          forbidClick: true,
        });
          this.$router.push({
              name:'SelectSeat',
              params:{
                id:buyId
              }
          })
        }

        
      }


  },
  created(){
      this.loadInfo();
  },
  mounted(){
    let newDate = new Date();
    let month = newDate.getMonth()+1;
    let day = newDate.getDate();//今天
    let tomorrow = newDate.getDate()+1;//明天
    let afterTomorrow = newDate.getDate()+2;//后天


    let current = '今天'+month+'月'+day+'日';
    let tomorrows = '明天'+month+'月'+tomorrow+'日';
    let afterTomorrows = '后天'+month+'月'+afterTomorrow+'日';


    let arr = [];
    arr.push(current,tomorrows,afterTomorrows)
    this.tabs = arr


  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.playtime-wrap{
    .padding2();
    .list{
      .flex();
    }
}
.info-list{
  .flex();
  li{
    flex:1;
    .flex();
    flex-direction: column;
    font-size:14px;
    align-items:center;
    justify-content:flex-start;
    text-align: center;
    padding:20px 0;
  }
}
</style>
<style>
.van-tabs__line{
  height: 2px;
}
.van-tab--active{
  color:red;
}
.van-tab__text--ellipsis{
  color:black;
}
</style>