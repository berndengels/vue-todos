import '@/plugins/axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiRoute = "/api/todos",
	authToken = localStorage.getItem('user.token'),
	axios = Vue.axios;

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {}
})
