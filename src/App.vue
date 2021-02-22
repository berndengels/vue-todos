<template>
    <div id="app" class="container">
        <div id="nav">
            <router-link class="page-item" to="/">Home</router-link>
            <router-link class="page-item" to="/todos">Todos ({{ todos.length }})</router-link>
            <router-link to="/login">Login</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'App',
  methods: mapGetters({todos: 'todos/allTodos'})
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
}

#nav a.router-link-exact-active {
    color: #42b983;
}

#nav .page-item::after {
    content: " | ";
    color: #2c3e50;
}
</style>
