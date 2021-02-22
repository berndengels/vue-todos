/* eslint-disable */
import '@/plugins/axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const apiRoute = "/api/todos",
	axios = Vue.axios;

const auth = new Vuex.Store({
	namespaced: true,
	state: {},
	getters: {},
	actions: {},
	mutations: {},
})

export  default auth;
