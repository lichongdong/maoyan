<template>
<div class="footer">
    <div class="btn-wrap"  v-show="isSelect">
       <van-button type="warning" size="large">请先选座</van-button>
    </div>
    <div class="btn-wrap"  v-show="!isSelect">
       <div class="select-info">
          <span>已选座位</span>
          <ul class="list-wrap">
            <li v-for="item in selected" :key="item.id">
              <span>{{item.x}}排{{item.y}}座</span>
            </li>
          </ul>
       </div>
       <van-button type="warning" size="large" @click="goOrder">&yen;{{(seatList.length)*(price)}}{{price.price}} 确认选座</van-button>
    </div>
</div>
</template>

<script>
import bus from '@/bus.js';
import { Toast } from 'vant';

export default{
  props:{
    info:Array
  },
  data(){
    return{
      seatList:[],
      isSelect:true,
      price:''
    }
  },

  methods:{
    goOrder(){
      this.$router.push({
        path:'/order'
      })
    }
  },

  computed:{
    selected(){
      const { info } = this
      let arr = []
      let index = 0;
      for(let i=0;i<info.length;i++){
        for(let j=0;j<info[i].length;j++){
          if(info[i][j].state==1){
            let tem = {id:index++,x:i+1,y:j+1}
            arr.push(tem)
          }

        }
      }
      this.seatList = arr
      if(this.seatList.length==0){
        this.isSelect=true
      }
      return arr

    }
  },
  mounted(){
    bus.$on('messagee',(data)=>{
        // console.log("我接受到了信息",data)
        this.isSelect = data
    })
    let data = JSON.parse(localStorage.getItem('data'))
    this.price = data.price;
  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.footer{
  width:100%;
  position:fixed;
  bottom:0;
  left:0;
}
.select-info{
  font-size:@font-mini;
  .padding2(5px 5px);
  .list-wrap{
    .flex();
    height:50px;
    justify-content: flex-start;
    margin-top:5px;
    li{
      .flex();
      padding:10px 10px;
      border:1px solid #ccc;
      margin-right:15px;
      align-items:center;
      justify-content: center;
    }
  }
}

</style>