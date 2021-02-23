<template>
    <div id="app" class="container">
        <div id="nav">
            <router-link class="page-item" to="/">Home</router-link>
            <router-link class="page-item" to="/todos">Todos ( {{ todos ? todos.length : 0 }} )</router-link>
            <a v-if="user" @click="logout">Logout ({{ user.name }})</a>
            <router-link v-else to="/login">Login</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions } from "vuex"

const App = {
    name: "App",
    created() {
        this.$store.dispatch('todos/all')
    },
    methods: {
        ...mapActions({logout: 'auth/logout'}),
    },
    computed: {
        ...mapGetters({
           todos: 'todos/allTodos',
           user: 'auth/user',
        }),
    }
}
console.info(App.methods)
export default App
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

#nav a.router-link-exact-active {
    color: #42b983;
}

#nav .page-item::after {
    content: " | ";
    color: #2c3e50;
}
</style>
