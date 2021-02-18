import '@/plugins/axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiRoute = "/api/todos",
	axios = Vue.axios;

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {}
})
