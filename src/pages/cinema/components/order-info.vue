<template>
<div class="order-wrap">
    <div class="movies-info">
        <van-image
        width="69"
        height="100"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="movies-content">
            <h5>长津湖</h5>
            <div class="date">
                <span>今天10月10日</span>
                <span>19:00</span>
                <span>(国语2D)</span>
            </div>
            <span>金逸影城(观澜店)</span>
            <div class="seat">
                <span>4号激光厅</span>
                <span>7排9座</span>
            </div>
        </div>
        <div class="left-price">
            <span>1张</span>
            <span>原价&yen;38</span>
        </div>
    </div>
    <div class="prompt">
      <div class="prompt-wrap">
        <div class="return-ticket">
            <span>x</span>
            <span>不支持退票</span>
        </div>
        <div class="change-ticket">
            <span>x</span>
            <span>不支持改签</span>
        </div>
      </div>
    </div>
    <div class="subtotal">
      <div class="subtotal-coupon">
          <van-cell title="活动与抵用券" is-link value="无可用" size="small"/>
      </div>
      <div class="subtotal-price">
          <span>票价小计</span>
          <span>&yen;38</span>
      </div>
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
.order-wrap{
}
.movies-info{
  .flex();
  color:white;
  background-color:#0044418a;
  padding:10px 10px 10px 10px;
  .movies-content{
    flex:3;
    margin-left:10px;
    span{
      font-size:@font-mini;
    }
  }
}
.date{
  display:flex;
  margin-top:5px;
}
.left-price{
  font-size:@font-mini;
}
.prompt{
  background-color:#0044418a;
}
.prompt-wrap{
  height:30px;
  background-color:#4079778a;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .flex();
  font-size:@font-mini;
  padding:10px 10px;
}

.return-ticket{
  .flex();
  color:white;
  margin-right:10px;
  span:nth-child(1){
    width:15px;
    height:15px;
    display: block;
    background-color:#d47082;
    border-radius:100%;
    text-align: center;
    margin-right:5px;
  }
}
.change-ticket{
  .flex();
  color:white;
  span:nth-child(1){
    width:15px;
    height:15px;
    display: block;
    background-color:#d47082;
    border-radius:100%;
    text-align: center;
    color:white;
    margin-right: 5px;
  }
}
.subtotal{
  margin-top:-10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color:white;
  .padding2(5px 0px);
}
.subtotal-coupon{
  font-size:@font-mini;
  border-bottom:1px solid #ccc;
}
.subtotal-price{
  position:absolute;
  right:10px;
  font-size:@font-xs;
  margin-top:10px;
  span:nth-child(2){
    color:red;
    margin-left:5px;
    margin-top:2px;
  }
}
</style>