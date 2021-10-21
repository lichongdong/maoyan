import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(Vuex)


//types
const types = {
	SET_LOCATION: "SET_LOCATION",
	SET_ADDRESS: "SET_ADDRESS"
}

//state
const state = {
	location: {},
	address: "",
	username:JSON.parse(localStorage.getItem("phone")) || {},//在本地存储中获取登录的手机号码
	// arr:localStorage.getItem("arrs") || {},
}

//getters
const getters = {
	location: state => state.location,
	address: state => state.address,
	getIsLogin: state => state.isLogin,
	getUserName: state => state.username,
}

//mutations

const mutations = {
	// 使用常量来当作函数名
	[types.SET_LOCATION](state,location) {
		if(location) {
			state.location = location;
		}else {
			state.location = null;
		}
	},
	[types.SET_ADDRESS](state,address) {
		if(address) {
			state.address = address;
		}else {
			state.address = null;
		}
	},
	setcommit(state,data){
		state.commitsum = data;
	},
	setuserInfor(state,v){
		state.username = v;
	},



}


//actions
const actions = {
	setLocation:({ commit },location) => {
		commit(types.SET_LOCATION, location);
	},
	setAddress:({ commit },address) => {
		commit(types.SET_ADDRESS, address);
	},



	
}


export default  new Vuex.Store({
   state,
   getters,
   mutations,
   actions
});

 