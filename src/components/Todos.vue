<template>
    <div>
        <h3>Todos</h3>
        <AddTodo/>
        <hr/>
        <Todo :todos="null"/>
    </div>
</template>

<script>
/* eslint-disable */
import AddTodo from "./AddTodo";
import Todo from "./Todo";

export default {
    name: "Todos",
    components: {Todo, AddTodo},
}
</script>

<style scoped>

</style>
