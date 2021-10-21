<template>
  <div class="bottom_nav">
    <Tabbar v-if="$route.meta.showTab"></Tabbar>
    <router-view></router-view>    
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default{
   data(){
      return{
          // disabled:true
      }
   },
   components:{
     Tabbar
   },
  


}
</script>
<style scoped>

</style>
