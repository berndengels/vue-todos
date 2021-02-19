import Vue from "vue";
import '@/plugins/axios'
import Validation from "@/inc/validation"

const apiRoute = "/api/login",
	axios = Vue.axios;

const state = {
	auth: null,
	errors: null,
}

const getters = {
	authenticated: (state => state.auth ? true : false),
	userName: (state => state.auth ? state.auth.name : null),
	userToken: (state => state.auth ? state.auth.token : null),
	getErrors: (state => state.errors),
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
					userToken = resp.data.token,
					auth = {
						name: userName,
						token: userToken,
					};

				localStorage.setItem('user.name', userName)
				localStorage.setItem('user.token', userToken)
				commit('unsetErrors')
				commit('setAuth', auth)
			})
			.catch(err => {
				Validation.handleErrors(err)
				commit('setErrors', err)
			});
	},
	logout({commit}) {
		localStorage.removeItem('user.name')
		localStorage.removeItem('user.token')
		commit('unsetAuth')
		commit('unsetErrors')
	},
	test({commit}) {
		commit('unsetErrors')
	}
}

const mutations = {
	setAuth: (state, auth) => (state.auth = auth),
	unsetAuth: (state) => (state.auth = null),
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
