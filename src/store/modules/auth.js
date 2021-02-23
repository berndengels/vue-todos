import Vue from "vue";
import '@/plugins/axios'
import Validation from "@/inc/validation"

const apiRoute = "/api/login",
	axios = Vue.axios;

const state = {
	user: null,
	errors: null,
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
	errors: state => state.errors,
}

const actions = {
	login({commit}, user) {
		axios.post(apiRoute, user)
			.then(resp => {
				if(200 !== resp.status) {
					Validation.handleErrors(resp.response.errors)
					commit('setErrors', resp.response.errors)
					return;
				}
				const userName = resp.data.name,
					userEmail = resp.data.email,
					userToken = resp.data.token;

				localStorage.setItem('name', userName)
				localStorage.setItem('email', userEmail)
				localStorage.setItem('token', userToken)
				commit('unsetErrors')
				commit('setLogin', user)
			})
			.catch(err => {
				Validation.handleErrors(err)
				commit('setErrors', err)
			});
	},
	logout({commit}) {
		localStorage.removeItem('name')
		localStorage.removeItem('email')
		localStorage.removeItem('token')
		commit('setLogout')
		commit('unsetErrors')
	},
	test({commit}) {
		commit('unsetErrors')
	}
}

const mutations = {
	setLogin: (state, auth) => (state.user = auth),
	setLogout: (state) => (state.user = null),
	setErrors: (state, errors) => (state.errors = errors),
	unsetErrors: (state) => (state.errors = null),
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
