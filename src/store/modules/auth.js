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
	user: state => state.user,
}

const actions = {
	login({commit}, user) {
		axios.post(apiRoute, user)
			.then(resp => {
				if(resp.data) {
					commit('setLogin', resp.data)
				}
			})
			.catch(err => {
				if(422 == err.response.status && err.response.data.errors) {
					alert(err.response.data.message)
				}
			});
	},
	logout({commit}) {
		commit('setLogout')
	}
}

const mutations = {
	setLogin: (state, user) => state.user = user,
	setLogout: (state) => state.user = null
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
