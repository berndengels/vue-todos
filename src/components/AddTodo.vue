<template>
    <div>
        <input v-model="text" class="w-50" placeholder="Todo Text" required />
        <button @click="null" class="btn-sm btn-info ml-2">
            <font-awesome-icon icon="plus-square"/>
            Add
        </button>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
    data() {
        return {
            text: null,
        }
    }
}
</script>

<style scoped>

</style>
