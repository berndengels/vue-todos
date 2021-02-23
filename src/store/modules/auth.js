/* eslint-disable */
import '@/plugins/axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiRoute = "/api/login",
	axios = Vue.axios;

const state = {
	user: null
}

const getters = {
	user: state => {
		// @todo: get localStorage
		if( localStorage.getItem('token') ) {
			state.user = {
				name: localStorage.getItem('name'),
				email: localStorage.getItem('email'),
				token: localStorage.getItem('token'),
			}
		}
		return state.user
	},
}

const actions = {
	login({commit}, user) {
		axios.post(apiRoute, user)
			.then(resp => {
				if(resp.data) {
					// @todo: set localStorage
					localStorage.setItem('name', resp.data.name)
					localStorage.setItem('email', resp.data.email)
					localStorage.setItem('token', resp.data.token)

					commit('setLogin', user)
				}
			})
			.catch(err => {
				if(422 == err.response.status && err.response.data.errors) {
					alert(err.response.data.message)
				}
			});
	},
	logout({commit}) {
		// @todo: remove localStorage
		localStorage.clear();
		commit('setLogout')
	}
}

const mutations = {
	setLogin: (state, user) => state.user = user,
	setLogout: (state) => state.user = null,
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
