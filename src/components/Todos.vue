<template>
  <div>
    <h3>Todos</h3>
    <AddTodo />
    <Todo />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";
export default {
name: "Todos",
  components: {Todo, AddTodo}
}
</script>

<style scoped>

</style>