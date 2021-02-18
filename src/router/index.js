import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TodosPage from "@/views/TodosPage";
import LoginPage from "@/views/LoginPage";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage
	},
	{
		path: '/todos',
		name: 'TodosPage',
		component: TodosPage
	},
	{
		path: '/login',
		name: 'LoginPage',
		component: LoginPage
	},
]

const router = new VueRouter({
	routes
})

export default router
