<template>
<div class="movie-collocation">
    <div class="list-wrap">
        <div class="list-title">
            <span>观影标配</span>
            <span>客官,爆米花跟电影最配哦</span>
        </div>
        <ul class="shop-list">
            <li class="list-item">
                <van-image
                width="100"
                height="100"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="shop-info">
                  <div class="shop-title">
                      <van-tag type="warning">单人</van-tag>
                      <span class="span1">普通款3D眼镜*1</span>
                  </div>
                  <div class="info-bottom">
                    <div class="price">
                      <span>&yen;4.95</span>
                      <del>&yen;4.95</del>
                    </div>
                    <div class="number-wrap">
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div>
                  </div>
              </div>
            </li>
            <li class="list-item">
                <van-image
                width="100"
                height="100"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="shop-info">
                  <div class="shop-title">
                      <van-tag type="warning">单人</van-tag>
                      <span class="span1">普通款3D眼镜*1</span>
                  </div>
                  <div class="info-bottom">
                    <div class="price">
                      <span>&yen;4.95</span>
                      <del>&yen;4.95</del>
                    </div>
                    <div class="number-wrap">
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div>
                  </div>
              </div>
            </li>
            <li class="list-item">
                <van-image
                width="100"
                height="100"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="shop-info">
                  <div class="shop-title">
                      <van-tag type="warning">单人</van-tag>
                      <span class="span1">普通款3D眼镜*1</span>
                  </div>
                  <div class="info-bottom">
                    <div class="price">
                      <span>&yen;4.95</span>
                      <del>&yen;4.95</del>
                    </div>
                    <div class="number-wrap">
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div>
                  </div>
              </div>
            </li>
            <li class="list-item">
                <van-image
                width="100"
                height="100"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
              <div class="shop-info">
                  <div class="shop-title">
                      <van-tag type="warning">单人</van-tag>
                      <span class="span1">普通款3D眼镜*1</span>
                  </div>
                  <div class="info-bottom">
                    <div class="price">
                      <span>&yen;4.95</span>
                      <del>&yen;4.95</del>
                    </div>
                    <div class="number-wrap">
                      <button>-</button>
                      <span>0</span>
                      <button>+</button>
                    </div>
                  </div>
              </div>
            </li>
        </ul>
        <div class="other-wrap">
           <van-cell title="抵用券" is-link value="无可用" size="small"/>
           <div class="subtotal-snacks">
              <span>小吃小计</span>
              <span>&yen;4.95</span>
           </div>
        </div>
        <div class="phone-wrap">
          <div class="phone-item">
            <div class="phone">
                <span>手机号码</span>
                <span>18122052816</span>
            </div>
            <div class="toast">
                <span>手机号仅用于生成订单,取票码不再以短信发送</span>
            </div>
          </div>
        </div>
    </div>
    <div class="footer">
        <div class="total-price">
            <span>&yen;54.95</span>
        </div>
        <div class="detailed" @click="OpenPopup">
            <span>明细</span>
            <van-icon name="arrow-down" />
        </div>
        <div class="btn">
            <van-button type="danger" size="small">确认支付</van-button>
        </div>
    </div>
    <van-popup v-model="show" position="bottom"  closeable :style="{ height: '50%' }">
        <div class="popup-list">
            <h5 class="title">价格明细</h5>
            <ul>
              <li>
                <div class="popup-item">
                    <span>电影票1张</span>
                    <div class="item-bottom">
                        <span>原价</span>
                        <span>含服务费5元/张 50元</span>
                    </div>
                </div>
                <div class="popup-item">
                    <span>小吃</span>
                    <div class="item-bottom">
                        <span>观影套餐</span>
                        <span>&yen;4.95x1</span>
                    </div>
                </div>
              </li>
            </ul>
        </div>
    </van-popup>
</div>
</template>

<script>

export default{
  data(){
    return{
     value:0,
     show:false,
    }
  },

  methods:{
    OpenPopup(){
      this.show = true
    }
    

  }



}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.list-wrap{
  .padding2();
  .list-title{
    font-size:@font-mini;
    padding-bottom:10px;
    .flex(space-between);
  }
}
.list-item{
  .flex(space-between);
  padding:20px 0px;
  border-top:1px solid #e6e4e4;
  .shop-info{
    .flex(space-between);
    flex-direction: column;
    font-size:@font-xs;
    margin-right:10px;
  }
}
.shop-title{
  align-items:center;
  justify-content: center;
  margin-right:20px;
}
.info-bottom{
  .flex();
}

del{
  font-size:@font-mini;
}
.price{
  span{
    color:red;
  }
}
.number-wrap{
  position:absolute;
  right:10px;
  button{
    width:25px;
    height:25px;
    color:white;
    border-radius:100%;
    border:none;
    background-color:green;
  }
}
.other-wrap{
  border-top:1px solid #ccc;
  margin-bottom:40px;
}
.subtotal-snacks{
  font-size:@font-xs;
  position:absolute;
  right:10px;
  margin-top: 5px;
  span:nth-child(2){
    color:red;
  }
}
.van-cell{
  border-bottom:1px solid #dcdcdc;
}
.phone-wrap{
  background-color:#ccc;
  padding:10px 0px;
  .phone-item{
  font-size:@font-mini;
  background-color:white;
  .phone,{
    padding:10px 0px;
  }
  .toast{
    padding:10px 0px;
    color:#888888;
  }
}
}
.footer{
  width:100%;
  height:44px;
  background-color:white;
  position:fixed;
  bottom:0;
  .flex(space-between);
  align-items:center;
  font-size:@font-xs;
  .total-price{
    padding-left:15px;
  }
  .btn{
    padding-right:15px;
  }
  .detailed{
    margin-left:50px;
  }
}
.popup-list{
  font-size:@font-xs;
  h5{
   margin:0px auto;
  }
}
</style>