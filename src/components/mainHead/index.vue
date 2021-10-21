<template>
<div class="main-header">
	<slot name="left">
		<div class="left">
        <van-icon
        name="arrow-left"
        v-show="showBack"
        @click="goBack"
        />
      </div>
	</slot>
	 <div class="main-title">
      {{title}}
    </div>
	<slot name="right">
		<div class="right">
    	</div>
	</slot>
</div>
</template>
<script>
export default{
	name: 'MainHeader',
	  props:{
    title:{
      type:String,
      default:'看电影'
    },
    showBack:{
      type:Boolean,
      default:true
    }
  },
	data(){
		return{
		
		}
	},
	  methods:{
    //返回上一页
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.main-header{
  height: 50px;
  background:#e54847;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: white;
}
</style>