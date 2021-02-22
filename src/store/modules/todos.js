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
			.catch(err => console.error(err))
	},
	remove({commit}) {},
	update({commit}) {},
	store({commit}) {},
}

const mutations = {
	setTodos: (state, todos) => state.todos = todos
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
