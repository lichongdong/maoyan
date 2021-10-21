<template>
<div class="city-wrap">
    <van-search
    show-action
    v-model="value"
    shape="round"
    background="#e54847"
    placeholder="请输入城市名称"
    @search="onSearch"
    @cancel="onCancel"
    />
    <PositioningCity/>
    <CityList/>
</div>
</template>

<script>
import PositioningCity from './positioning-city'
import CityList from './city-list'
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default{
  data(){
    return{

        value:''
    }
  },
  methods:{
    onSearch(){
        Toast('北京')
    },
    onCancel(){
        Toast('取消了')
    },

  },

  components:{
    PositioningCity,
    CityList
  }



}
</script>

<style lang="less" scoped>

</style>
<style>
.van-search__action{
    color: white;
}
</style>