<template>
<!-- <div class="selection-seat-title">
  <h5>{{info.name}}</h5>
  <div class="item">
    <span>2021-09-28</span>
    <span>{{info.play_time}}</span>
    <span>{{info.play_type}}</span>
  </div>
</div> -->
<div class="selection-seat-title">
  <h5>当男人恋爱时</h5>
  <div class="item">
    <span>2021-09-28</span>
    <span>13:45</span>
    <span>国语2D</span>
  </div>
</div>
</template>

<script>

export default{
props:{
  info:Object
},
  data(){
    return{
         // info:''
    }
  },

  methods:{
    
    

  },
  mounted(){
    // this.info = localStorage.getItem('title')
    // console.log(this.info)
    // console.log(localStorage.getItem(JSON.parse('title')))
  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.selection-seat-title{
  .padding2();
  border-bottom:1px solid #ccc;
  .item{
    font-size:@font-xs;
    margin-top:5px;
  }
}
</style>