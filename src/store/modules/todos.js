/* eslint-disable */
import '@/plugins/axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiRoute = "/api/todos",
	axios = Vue.axios;

const state = {
	// initialisiere state-Variable todos als Status
	todos: null,
}

const getters = {
	allTodos: state => state.todos
}

const actions = {
	// actions in vues benötigen alle commit-Parameter -> wird automatisch
	// als Funktionsname mitgeliefert, um sie unten zu benutzen, um die Mutation anzusprechen
	all({commit}) {
		axios.get(apiRoute)
			// commit führt Mutation aus
			.then(resp => commit('setTodos', resp.data.data))
			.catch(err => console.error(err));



	},
	remove({commit}) {

	},
	update({commit}) {

	},
	store({commit}) {

	}
}

const mutations = {
	// setze Daten für die todos, state wird automatisch gesetzt
	setTodos: (state, todos) => state.todos = todos
}

export default {
	// modules sind per namespace ansprechbar
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
