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
/* eslint-disable */
import { mapActions } from "vuex"

export default {
    name: "AddTodo",
    methods: mapActions({store: 'todos/store'}),
    data() {
        return {
            todo: {
              done: 0,
              text: null,
            },
        }
    }
}
</script>

<style scoped>

</style>
