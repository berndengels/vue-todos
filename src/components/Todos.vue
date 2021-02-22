<template>
    <div>
        <h3>Todos</h3>
        <AddTodo/>
        <hr/>
        <Todo :todos="$store.state.todos"/>
    </div>
</template>

<script>
/* eslint-disable */
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import store from "../store";
import { mapGetters, mapActions } from "vuex"

export default {
    name: "Todos",
    components: {Todo, AddTodo},
    created() {
        this.getTodos();
    },
    methods: mapActions({getTodos: 'todos/all'})
}
</script>

<style scoped>

</style>
