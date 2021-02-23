/* eslint-disable */
import '@/plugins/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth';

Vue.use(Vuex)

const apiRoute = "/api/todos",
	axios = Vue.axios;

// Status der Daten im UI
const state = {
	// initialisiere state-Variable todos als Status
	todos: null,
}

const getters = {
	allTodos: state => state.todos
}

// Für Veränderungen im API/Backend
const actions = {
	// Prüfe, ob user eingeloggt ist
	checkAuth() {
		if(auth.state.user) {
			axios.defaults.headers.common['Authorization'] = "Bearer " + auth.state.user.token;
		} else {
			alert('Bitte einloggen!')
			location.href = '/#/login'
		}
	},
	// actions in vues benötigen alle commit-Parameter -> wird automatisch
	// als Funktionsname mitgeliefert, um sie unten zu benutzen, um die Mutation anzusprechen
	all({commit}) {
		axios.get(apiRoute)
			// commit führt Mutation aus
			.then(resp => commit('setTodos', resp.data.data))
			.catch(err => console.error(err));
	},
	remove({commit}, todo) {
		actions.checkAuth()
		axios.delete(apiRoute +'/' + todo.id)
			.then(() => commit('removeTodo', todo))
			.catch(err => console.error(err));
	},
	update({commit}, todo) {
		actions.checkAuth()
		axios.put(apiRoute +'/' + todo.id, todo)
			.then(() => commit('updateTodo', todo))
			.catch(err => console.error(err))
	},
	store({commit}, todo) {
		actions.checkAuth()
		// Objekt besser direkt in der Komponente erstellen und nur übergeben
		// const newTodo = {
		// 	done: false,
		// 	text: text
		// }
		axios.post(apiRoute, todo)
			.then(() => commit('storeTodo', todo))
			.catch(err => console.error(err));
	}
}

// Für Veränderungen im UI
const mutations = {
	// setze Daten für die todos, state wird automatisch gesetzt
	setTodos: (state, todos) => state.todos = todos,
	removeTodo: (state, todo) => state.todos = state.todos.filter(item => todo !== item),
	// Achtung!! unshift-Methode gibt nichts zurück, also direkt aufrufen!
	storeTodo: (state, todo) => state.todos.unshift(todo),
	updateTodo: (state) => state.todos
}

export default {
	// modules sind per namespace ansprechbar
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
