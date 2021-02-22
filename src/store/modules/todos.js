/* eslint-disable */
import '@/plugins/axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiRoute = "/api/todos",
	axios = Vue.axios;

const todos = new Vuex.Store({
	namespaced: true,
	state: {
		todos: null,
	},
//	getters: {},
	actions: {
		all(commit) {
			axios.get(apiRoute)
				.then(resp => commit('setTodos', resp.data.data))
				.catch(err => console.error(err));
		}
	},
	mutations: {
		setTodos: (state,todos) => state.todos = todos,
	},
})

export default todos
