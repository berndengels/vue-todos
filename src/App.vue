<template>
    <div id="app" class="container">
        <div id="nav">
            <router-link class="page-item" to="/">Home</router-link>
            <router-link class="page-item" to="/todos">Todos ({{ todos.length }})</router-link>
            <a class="link font-weight-bold" v-if="authenticated" @click="logout">Logout ({{ userName }})</a>
            <router-link v-else to="/login">Login</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex"
export default {
    name: 'App',
    computed: mapGetters({
        authenticated: 'auth/authenticated',
        userName: 'auth/userName',
        todos: 'todos/allTodos',
    }),
    methods: mapActions({logout: 'auth/logout'}),
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
}
#nav a {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
}
#nav a:hover,
#nav a.router-link-exact-active
{
    color: #42b983;
}
#nav .page-item::after {
    content: " | ";
    color: #2c3e50;
}
</style>
