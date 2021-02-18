<template>
  <div>
    <h3>Todos</h3>
    <AddTodo :handleAdd="add"/>
    <hr/>
    <!--        Binde Todo mit props todos-Datenobjekt und handleRemove-Funktion ein-->
    <Todo :handleRemove="remove" :todos="todos"/>
  </div>
</template>

<script>
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import {data} from "../store/todos";

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
    add(txt) {
      // Neu angelegtes todo-Objekt analog der todos-Objektstruktur mit neuem text
      var obj = {
        id: 100,
        done: false,
        text: txt,
      }
      // Füge todo-Objekt das neu kreierte Objekt mit push hinzu
      this.todos.push(obj)
    },
    // update(todo) {
    //
    // }
    //

  }
}
</script>

<style scoped>

</style>
