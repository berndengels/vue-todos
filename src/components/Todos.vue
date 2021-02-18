<template>
    <div>
        <h3>Todos</h3>
        <AddTodo />
        <hr/>
<!--        Binde Todo mit props todos-Datenobjekt und handleRemove-Funktion ein-->
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
      // Durchlaufe mit filter das gesamte array und gib alle items zurück,
      // die != dem aktuellen item sind (nur in der Seitenansicht, DB bleibt unberührt)
      // ES6-Syntax
      this.todos = this.todos.filter(item => item !== todo)
      // // Klassische Variante
      // this.todos = this.todos.filter(function(item) {
      //   if (item !== todo) {
      //     return item
      //   }
      // })
      },
    // add(text) {
    //
    // },
    // update(todo) {
    //
    // }
    //

  }
}
</script>

<style scoped>

</style>
