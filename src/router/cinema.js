/**
 *@desc 影院页面
 */
import Cinema from '../pages/cinema'
import SelectMovie from '../pages/cinema/components/select-movie'
import SelectSeat from '../pages/cinema/components/selection-seat'
import Order from '../pages/cinema/components/order'
export default[
	{
		path:'/cinema',
		name:'Cinema',
		component:Cinema,
		meta:{
			title:'电影院',
			showTab:true
		}

	},
	{
		path:'/select-movie',
		name:'SelectMovie',
		component:SelectMovie,
		meta:{
			title:'选票',
			showTab:false
		}
	},
	{
		path:'/selection-seat',
		name:'SelectSeat',
		component:SelectSeat,
		meta:{
			title:'选座',
			showTab:false
		}
	},
	{
		path:'/order',
		name:'Order',
		component:Order,
		meta:{
			title:'支付订单',
			showTab:false
		}
	}
]