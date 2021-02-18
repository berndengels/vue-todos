<template>
  <div>
    <h3>Todos</h3>
    <AddTodo />
    <Todo :todos="todos"/>
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";
import todoData from "@/store/todos.json";

export default {
  name: "Todos",
  components: {Todo, AddTodo},
  data(){
    return {
      todos: todoData.data,
    }
  }
}
</script>

<style scoped>

</style>