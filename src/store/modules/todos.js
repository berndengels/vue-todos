/* eslint-disable */
import '@/plugins/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./auth";

Vue.use(Vuex)

const apiRoute = "/api/todos",
	axios = Vue.axios;

const state = {
	todos: null,
}

const getters = {
	allTodos: state => state.todos,
}

const actions = {
	checkAuth() {
		if(auth.state.user) {
			axios.defaults.headers.common['Authorization'] = "Bearer " + auth.state.user.token;
		} else {
			alert('Bitte einloggen!')
			location.href = "/#/login"
		}
	},
	all({commit}) {
		axios.get(apiRoute)
			.then(resp => commit('setTodos', resp.data.data))
			.catch(err => console.error(err));
	},
	remove({commit}, todo) {
		actions.checkAuth()
		axios.delete(apiRoute + "/" + todo.id)
			.then(resp => commit('removeTodo', todo))
			.catch(err => console.error(err));
	},
	store({commit}, todo) {
		actions.checkAuth()
		axios.post(apiRoute, todo)
			.then(resp => {
				if(resp.data.error) {
					alert(resp.data.error.text[0])
					return
				}
				commit('addTodo', resp.data.data)
			})
			.catch(err => console.error(err));
	},
	update({commit}, todo) {
		actions.checkAuth()
		axios.put(apiRoute + "/" + todo.id, todo)
			.then(resp => {
				if(resp.data.error) {
					alert(resp.data.error.text[0])
					return
				}
				commit('updateTodo', resp.data.data)
			})
			.catch(err => console.error(err));
	},
}

const mutations = {
	setTodos: (state, todos) => state.todos = todos,
	removeTodo: (state, todo) => state.todos = state.todos.filter(item => todo !== item),
	addTodo: (state, todo) => state.todos.unshift(todo),
	updateTodo: (state, todo) => state.todos,
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
