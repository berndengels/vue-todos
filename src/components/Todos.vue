<template>
    <div>
        <h3>Todos</h3>
        <AddTodo />
        <Todo :todos="todos" />
    </div>
</template>

<script>
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { data } from "../store/todos";

export default {
    name: "Todos",
    components: {Todo, AddTodo},
    created() {
    },
    data() {
        return {
            todos: data,
        }
    }
}
</script>

<style scoped>

</style>
