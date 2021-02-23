<template>
    <div>
        <h3>Todos</h3>
        <AddTodo/>
        <hr/>
        <Todo :todos="todos"/>
    </div>
</template>

<script>
/* eslint-disable */
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { mapGetters } from "vuex"

export default {
    name: "Todos",
    components: {Todo, AddTodo},
    computed: mapGetters({todos: 'todos/allTodos'})
}
</script>

<style scoped>

</style>
