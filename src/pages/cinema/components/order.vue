<template>
<div class="order">
    <MainHeader :showBack="true" :title="title"/>
    <OrderInfo/>
    <AddTicketBuyer/>
    <MovieCollocation/>
</div>
</template>

<script>
import OrderInfo from './order-info';
import AddTicketBuyer from './add-ticket-buyer';
import MovieCollocation from './movie-collocation';
export default{
  data(){
    return{
         title:'支付订单'
    }
  },

  methods:{
    
  },
  components:{
    OrderInfo,
    AddTicketBuyer,
    MovieCollocation
  }



}
</script>

<style lang="less" scoped>
.order{
  padding-bottom:50px;
}
</style>