<template>
<div class="city-list">
  <van-index-bar :sticky="false">
      <div v-for="(item,index) in indexList" :key="index">
           <van-index-anchor :index="item.index" />
           <van-cell 
           @click="select(items.short_name)" 
           v-for="(items,index) in item.list" 
           :key="index" 
           :title="items.short_name" />
      </div>
  </van-index-bar>

</div>
</template>

<script>
export default{
  data(){
    return{
        cityList:[],
        indexList:[]
    }
  },

  methods:{
    loadInfo(){
      this.$axios.get('/api/cityList').then((res)=>{
        if(res.data.data.errorCode == 0){
          this.handleCity(res.data.data.city_list)
        }

      })
    },
    handleCity(datalist){
        let newDataList = [];
        let letterArr = [];//获取到a-z的所有字母
        for(let i=65;i<91;i++){
          letterArr.push(String.fromCharCode(i))
        }
        for(let j=0;j<letterArr.length;j++){

            let arr = datalist.filter(item =>
                item.pinyin.substring(0,1) === letterArr[j].toLowerCase());
                if(arr.length>0){
                    newDataList.push({
                      index:letterArr[j],
                      list:arr
                    })
                }
        }
        // console.log(newDataList)
        this.indexList = newDataList
    },
    //选择城市跳转到首页
   select(cityName){
    // console.log(name)
    this.$router.push({
        path:'/',
        query:{cityName}
    })
   } 
  },
  mounted(){
    this.loadInfo();
  }
    

  }




</script>

<style lang="less" scoped>
.city-list{
    padding-bottom:100px;
}
</style>