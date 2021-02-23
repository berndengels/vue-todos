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
// mapGetters sind dazu da, Daten zu erhalten
import { mapGetters } from "vuex";

export default {
    name: "Todos",
    components: {Todo, AddTodo},
    // interne Berechnung durch Vue, getter-Funktion liefert Daten für JS
    // mapGetters ruft automatisch die getter-Funktionen auf
    computed: mapGetters({todos: 'todos/allTodos'})
}
</script>

<style scoped>

</style>
