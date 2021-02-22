<template>
    <div>
        <h3>Todos</h3>
        <AddTodo :handleAdd="add"/>
        <hr/>
        <Todo :todos="todos" :handleRemove="remove" />
    </div>
</template>

<script>
import  Vue from "vue";
import "@/plugins/axios";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

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
                .then(resp => this.todos = resp.data.data)
                .catch(err => console.error(err));
        },
        remove(todo) {
            // ES6 Syntax
            axios.delete(apiURL + "/" + todo.id)
                .then(() => this.todos = this.todos.filter(item => item !== todo))
                .catch(err => console.error(err));
/*
// klassische Syntax in JS
            this.todos = this.todos.filter(function(item) {
                if(item !== todo) {
                    return item
                }
            })
*/
        },
        add(txt) {
            var obj = {
                id: 100,
                done: 1,
                text: txt,
            }
            this.todos.unshift(obj)
        },
/*
        update(todo) {

        }
*/
    }
}
</script>

<style scoped>

</style>
