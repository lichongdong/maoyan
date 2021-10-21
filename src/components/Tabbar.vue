<template>
<div>
	<div>
		<ul class="tabbar">
	       <router-link to="/movies/nowplaying" tag="li" activeClass="myactive">
	          <i class="iconfont icon-dianying"></i>
	          电影
	       </router-link>
	       <router-link to="/cinema" tag="li" activeClass="myactive">
	          <i class="iconfont icon-yingyuan"></i>
	          影院
	       </router-link>
	       <router-link to="/home" tag="li" activeClass="myactive">
	          <i class="iconfont icon-wode"></i>
	          我的
	       </router-link>
	    </ul>
    </div>
</div>
</template>
<script>
	
</script>
<style  scoped>
.tabbar{
    width:100%;
    height:38px;
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    font-size:16px;
    position:fixed;
    bottom:0;
    z-index:100;
 }
li{
    flex:1;
    background-color:skyblue;
    text-align:center;
    line-height:38px;
  }
.iconfont{
    font-size:16px;
}
.myactive{
    color:red;
}
</style>