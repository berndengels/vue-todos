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
// Nutze das Plugin, in dem axios bereits importiert wurde
import "@plugins/axios";
import Vue from "vue";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
// import {data} from "../store/todos";
// import uuid from 'uuid';

const axios = Vue.axios;

export default {
  name: "Todos",
  components: {Todo, AddTodo},
  // created() {

  // },
  data() {
    return {
      todos: null,
    }
  },
  methods: {
    getTodos() {
      axios.get('/api/todos')
          // axios verpackt Daten in Attribut namens data, im API sind die Daten in einem json-Attribut namens data
          .then(resp => this.todos = resp.data.data)
          .catch(err => console.log(err));
    },
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
      // Neu angelegtes todo-Objekt analog der todos-Objektstruktur mit neuem text (Parameter txt)
      var obj = {
        id: uuid.v4(),
        done: false,
        text: txt
      }
      // Füge todo-Objekt das neu kreierte Objekt mit push hinzu
      this.todos.push(obj)
      // axios.post('http://videostore.loc/api/todos', obj)
      //     .then(res => this.todos = [...this.todos, res.data.data])
      //     .catch(err => console.log(err));
// Clear text field after submitting
//       this.text = '';
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
