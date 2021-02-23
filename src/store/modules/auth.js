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

	},
	logout() {

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
