<template>
<div class="seat-wrap">
  <div class="seat-content">
    <ul class="index-list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
    </ul>  
    <div class="seat-list">
        <div class="movie-title">
            <span>银幕</span>
        </div>
        <ul v-for="(item,index) in info">
          <li v-for="(v,i) in item" @click="chose(v)" :class="selectClass(v)"></li>
        </ul>
    </div>
  </div>
  <div class="remarks">
      <ul class="remarks-list">
          <li><span class="remarks-white"></span>未售</li>
          <li><span class="remarks-red"></span>已售</li>
      </ul>
  </div>
</div>
</template>
<script>
import { Toast } from 'vant';
import bus from '@/bus.js';
export default{
  props:{
    info:Array
  },
  data(){
     return{
           seatList:[],
           datalist:[],
           isSelect:true
        }
   },
  methods:{
      selectClass(v){
        if(v.state == 0){
          return "white"
        }else if(v.state == 1){
          return "green"
        }else if(v.state == 2){
          return "red"
        }
      },
      chose(v){
          // console.log(v)
          if(v.state == 0){
            v.state = 1
          }else if(v.state == 1){
            v.state = 0;
          }else if(v.state == 2){
            Toast('已经有人购买了');
            return;
          }
          bus.$emit('messagee',this.isSelect=false)
      },

  },



   
  

}
</script>
<style lang="less" scoped>
@import '../../../less/index.less';
.seat-wrap{
  .flex();
  flex-direction: column;
  // background-color:#ccc;
  .seat-content{
    .flex();
    font-size:@font-xs;
    .index-list{
      width:20px;
      height:100%;
      background-color:#ccc;
      .flex();
      flex-direction: column;
      align-items:center;
      justify-content: center;
      margin-top:40px;
      li{
        margin-top:8px;
      }
      li:last-child{
        margin-bottom:8px;
      }
    }
  }
}
.seat-list{
  margin-left:20px;
  ul{
    .flex();
    li{
      width:20px;
      height:20px;
      border:1px solid #ccc;
      margin-right:5px;
      margin-top:5px;
      border-radius:3px;
    }
  }
  .movie-title{
    width:70%;
    margin:0px auto;
    text-align: center;
    background-color:#cfcfcf;
    margin-bottom:20px;
    border-bottom-left-radius:30px;
    border-bottom-right-radius:30px;
  }
}
.white{
  background-color:white;
}
.red{
  background-color:red;
}
.green{
  background-color:green;
}

.remarks{
  margin-top: 30px;
  text-align: center;
  font-size:@font-xs;
  .remarks-list{
    // background-color:pink;
    .flex();
    justify-content: center;
    align-items:center;
    li{
      .flex();
      margin-left:5px;
      .remarks-white{
      width:20px;
      height:20px;
      display: block;
      background-color:white;
      border:1px solid #ccc;
      margin-right:5px;
      border-radius:3px;
    }
    .remarks-red{
      width:20px;
      height:20px;
      display: block;
      background-color:red;
      border:1px solid #ccc;
      margin-right:5px;
      border-radius:3px;
    }
    }

  }
}


</style>