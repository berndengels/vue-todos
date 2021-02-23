<template>
    <div>
        <input v-model="newTodo.text" class="w-50" placeholder="Todo Text" required />
        <button @click="add(newTodo)" class="btn-sm btn-info ml-2">
            <font-awesome-icon icon="plus-square"/>
            Add
        </button>
        <AlertMsg :errors="errors"/>
    </div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from "vuex";
import AlertMsg from "./elements/AlertMsg";

export default {
    name: "AddTodo",
    components: {AlertMsg},
    data() {
        return {
            newTodo: {
                done: 0,
                text: null,
            }
        }
    },
    computed: mapGetters({errors: 'todos/getStoreErrors'}),
    methods: mapActions({add: 'todos/add'}),
}
</script>

<style scoped>

</style>
