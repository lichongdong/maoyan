<template>
<div class="comment-list-wrap">
    <span class="title">短评</span>
    <div class="comment-info" v-for="item in commentList" :key="item.user_id">
        <van-image
        width="40"
        height="40"
        fit="cover"
        round
        :src="item.avatar"
      />
        <div class="right-wrap">
            <div class="right-wrap-top">
                <div class="user-info">
                     <span>{{item.user_name}}</span>
                     <div class="score">
                        <van-rate v-model="value" size="12" allow-half void-icon="star" void-color="#eee" />
                        <p>{{item.score}}分</p>
                     </div>
                </div>
                <van-button round plain type="default" size="mini">
                     <span class="iconfont icon-dianzan">{{item.click_number}}</span>
                </van-button>
            </div>
            <div class="right-wrap-bottom">
                <p>{{item.introduction}}</p>
                <div class="comment-time">
                    <span class="date">{{item.created_time}}</span>
                    <van-button round plain type="default" size="mini">
                        <span class="iconfont icon-dianzan">{{item.reply_number}}回复</span>
                    </van-button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default{
  data(){
    return{
         value:5,
         commentList:[]
    }
  },

  methods:{
      loadInfo(){
          this.$axios.get('/api/comment').then((res)=>{
            // console.log(res)
            if(res.data.data.errorCode == 0){
                this.commentList = res.data.data.comment_list
                // console.log(this.commentList)
            }
          })
      }
    

  },
  mounted(){
    this.loadInfo();
  }


}
</script>

<style lang="less" scoped>
@import '../../../less/index.less';
.comment-list-wrap{
  padding:24px 0px 24px 24px;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  height:500px;
  background-color:white;
  .title{
      font-size:@font-mini;
  }
}
.comment-info{
  .flex();
  margin-top:30px;
  padding-bottom:10px;
  border-bottom:1px solid #e8e8e8;
  img{

  }
}
.right-wrap{
  .flex();
  flex:1;
  flex-direction: column;
  margin-left:5px;
  padding-right:14px;
  .right-wrap-top{
    .flex(space-between);
    padding-right:14px;
    .user-info{
      .flex();
      flex-direction: column;
      span{
        font-size:@font-mini;
      }
    }
  }
}
.score{
   .flex();
   justify-content: center;
   align-items:center;
   p{
    font-size:@font-mini;
    color:#faaf00;
    margin-left:5px;

   }
}
.icon-dianzan{
  font-size:@font-mini;
}
.right-wrap-bottom{
  margin-top:10px;
  p{
    font-size:@font-mini;
    word-break:break-word;
    display:-webkit-box;
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
  }
}
.comment-time{
    font-size:@font-mini;
    .flex();
    margin-top:10px;
    align-items:center;
    .date{
      margin-right:20px;
    }
}
</style>
<style>
  .van-icon{
  line-height:15px !important;
}
</style>