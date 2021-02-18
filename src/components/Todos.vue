<template>
  <div>
    <h3>Todos</h3>
    <AddTodo/>
    <Todo :todos="todos"/>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import AddTodo from "@/components/AddTodo";
// Importiere data aus dem angegebenen File
import { data } from "@/store/todos";
// // Alternative Schreibweise:
// import todoData from "@/store/todos";



export default {
  name: "Todos",
  components: {
    Todo,
    AddTodo,
  },
  created() {
    console.info(this.todos)
  },
  data() {
    return {
      todos: data,
      // // entsprechend alternativer Schreibweise oben
      // todos: todoData.data,
    }
  }
}
</script>

<style scoped>

</style>