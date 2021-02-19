import Vue from 'vue'
import Vuex from 'vuex'
import todos from "./modules/todos";
import auth from "./modules/auth";

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: { todos, auth }
})
export default store;
