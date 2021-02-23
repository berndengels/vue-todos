/* eslint-disable */
import '@/plugins/axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiRoute = "/api/todos",
	axios = Vue.axios;

const state = {
	todos: null,
}

const getters = {
	allTodos: state => state.todos
}

const actions = {
	all({commit}) {
		axios.get(apiRoute)
			.then(resp => commit('setTodos', resp.data.data))
			.catch(err => console.error(err));
	},
	remove({commit}, todo) {
		axios.delete(apiRoute + "/" + todo.id)
			.then(resp => commit('removeTodos', todo))
			.catch(err => console.error(err));
	},
	update({commit}) {},
	store({commit}) {},
}

const mutations = {
	setTodos: (state, todos) => state.todos = todos,
	removeTodos: (state, todo) => state.todos = state.todos.filter(item => todo!== item),
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
