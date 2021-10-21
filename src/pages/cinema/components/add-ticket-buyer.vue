<template>
<div class="add-ticket-buyer">
    <div class="add-wrap">
        <span>+</span>
        <span>请添加购票人</span>
    </div>
</div>
</template>

<script>

export default{
  data(){
    return{
         
    }
  },

  methods:{
    
    

  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.add-ticket-buyer{
  margin-top:20px;
  padding-top:10px;
  padding-bottom:10px;
  background-color:#dcdcdc;
}
.add-wrap{
  .padding2(10px 0px);
  font-size:@font-xs;
  .flex();
  color:red;
  justify-content: center;
  align-items:center;
  text-align:center;
  background-color:white;
  span:nth-child(1){
    width:15px;
    height:15px;
    display: block;
    border-radius:100%;
    border:1px solid red;
    margin-right:10px;
  }
}
</style>