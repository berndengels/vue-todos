<template>
    <div>
        <h3>Todos</h3>
        <AddTodo />
        <hr/>
        <Todo :todos="todos" :handleRemove="remove"/>
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
    },
  methods: {
      remove(todo) {
        // @todo axios api request
        // ES6 Syntax
        this.todos = this.todos.filter(item => item !== todo)
      },
    /*
      add(text) {

      },
      update(todo) {

      }

     */
  }
}
</script>

<style scoped>

</style>
