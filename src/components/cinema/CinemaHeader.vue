<template>
<div class="cinema-header">
    <ul class="list-wrap">
        <li v-for="item in tabs" :key="item.id"  @click="Showdrag(item.id)">
            <span>{{item.name}}</span>
            <span class="iconfont icon-jiantouarrow486" v-show="isShow" ></span>
            <span class="iconfont icon-jiantouarrow492" v-show="!isShow"></span>
        </li>
     <!--    <li>
            <span>品牌</span>
            <span class="iconfont icon-jiantouarrow486" v-show="isShow" @click="isShow()"></span>
            <span class="iconfont icon-jiantouarrow492" v-show="!isShow" @click="isShow()"></span>
        </li>
        <li>
            <span>特色</span>
            <span class="iconfont icon-jiantouarrow486" v-show="isShow" @click="isShow()"></span>
            <span class="iconfont icon-jiantouarrow492" v-show="!isShow" @click="isShow()"></span>
        </li> -->
    </ul>

</div>
</template>

<script>
export default {

   data(){
        return{
            isShow:true,
            tabs:[
                {id:1,name:'全城'},
                {id:2,name:'品牌'},
                {id:3,name:'特色'}
            ]
        }
   }, 
   methods:{
        Showdrag(id){
            this.isShow = !this.isShow
        }
   } 

}
</script>

<style lang="less" scoped>
@import '../../less/index.less';
.list-wrap{
    // .padding2(5px,);
    .flex();
    height:44px;
    border-bottom:1px solid #ccc;
    font-size:@font-mini;
    li{
     flex:1;
     .flex();
     align-items:center;
     justify-content:center;
    }
    li:nth-child(2){
        border-left:1px solid #ccc;
        border-right:1px solid #ccc;
    }
}
</style>
