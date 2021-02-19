<template>
    <div>
        <h3>Todos</h3>
        <AddTodo/>
        <hr/>
        <Todo :todos="todos" />
    </div>
</template>

<script>
/* eslint-disable */
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { mapGetters } from "vuex";
//import store from "@/store";

export default {
    name: "Todos",
    components: {Todo, AddTodo},
    created() {
        this.$store.dispatch('todos/all')
    },
    computed: mapGetters({todos: 'todos/allTodos'}),
/*
    computed: {
        todos: () => store.getters["todos/allTodos"]
    }
*/
}
</script>

<style scoped>

</style>
