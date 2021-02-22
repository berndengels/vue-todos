<template>
  <div>
    <h3>Todos</h3>
    <AddTodo :handleAdd="add"/>
    <hr/>
    <!-- Binde Todo mit props todos-Datenobjekt und handleRemove-Funktion ein -->
    <Todo :todos="todos" :handleRemove="remove" :handleUpdate="update"/>
  </div>
</template>

<script>
/* eslint-disable*/
import Vue from "vue";
// Nutze das Plugin, in dem axios bereits importiert wurde
import "@/plugins/axios";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
// import {data} from "../store/todos";
// import uuid from 'uuid';

const axios = Vue.axios,
    apiURL = "/api/todos";

export default {
  name: "Todos",
  components: {Todo, AddTodo},
  created() {
    this.getTodos()
  },
  data() {
    return {
      todos: null,
    }
  },
  methods: {
    getTodos() {
      axios.get(apiURL)
          // axios verpackt Daten in Attribut namens data, im API sind die Daten in einem json-Attribut namens data
          .then(resp => this.todos = resp.data.data)
          .catch(err => console.log(err));
    },
    remove(todo) {
      axios.delete(apiURL + "/" + todo.id)
          // Antwort vom Server (resp) wird nicht benutzt
          .then(() => this.todos = this.todos.filter(item => item !== todo))
          .catch(err => console.log(err));


      // Durchlaufe mit filter das gesamte array und gib alle items zurück,
      // die != dem aktuellen item sind (nur in der Seitenansicht, DB bleibt unberührt)
      // ES6-Syntax
      // this.todos = this.todos.filter(item => item !== todo)
      // // Klassische Variante
      // this.todos = this.todos.filter(function(item) {
      //   if (item !== todo) {
      //     return item
      //   }
      // })
    },
    add(txt) {
      // Neu angelegtes todo-Objekt analog der todos-Objektstruktur mit neuem text (Parameter txt)
      var newTodo = {
        // id: uuid.v4(),
        done: false,
        text: txt
      }
      // Füge todo-Objekt das neu kreierte Objekt mit unshift hinzu
      // push fügt neues Element am Ende hinzu
      // unshift fügt neues Element am Anfang hinzu, alle Indizes werden neu berechnet
      axios.post(apiURL, newTodo)
          .then(resp => {
            if(resp.data.error) {
              alert(resp.data.error.text[0])
              return
            }
            // Lege das Array im UI komplett neu an inklusive neuem Element u. aktualisierten IDs
            this.todos.unshift(resp.data.data)
          })
          .catch(err => console.log(err));
// Clear text field after submitting
//       this.text = '';
    },
    update(todo) {
      axios.put(apiURL + "/" + todo.id, todo)
          .then(resp => {
            if(resp.data.error) {
              alert(resp.data.error.text[0])
              return
            }
            this.todos = this.todos.map(item => (todo === item) ? todo : item)
            // Benutze alternativ die Antwort vom Server
            // this.todos = this.todos.map(item => (resp.data.data === item) ? resp.data.data : item)

          })
          .catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>

</style>
