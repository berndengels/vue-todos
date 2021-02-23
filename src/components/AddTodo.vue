<template>
    <div>
        <input v-model="text" class="w-50" placeholder="Todo Text" required />
        <button @click="store(text)" class="btn-sm btn-info ml-2">
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
            text: null,
        }
    },
    methods: mapActions({store: 'todos/store'})
}
</script>

<style scoped>

</style>
