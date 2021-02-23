<template>
    <div>
        <input v-model="todo.text" class="w-50" placeholder="Todo Text" required />
        <button @click="store(todo)" class="btn-sm btn-info ml-2">
            <font-awesome-icon icon="plus-square"/>
            Add
        </button>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "AddTodo",
    data() {
        return {
          todo: {
            done: 0,
            text: null
          }

        }
    },
    methods: mapActions({store: 'todos/store'})
}
</script>

<style scoped>

</style>
