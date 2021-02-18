<template>
    <div>
        <input v-model="text" class="w-50" placeholder="Todo Text" required />
        <button @click="handleAdd(text)" class="btn-sm btn-info ml-2">
            <font-awesome-icon icon="plus-square"/>
            Add
        </button>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
  props: ['handleAdd'],
  data () {
      return {
        text: null,
      }
  }
}
</script>

<style scoped>

</style>
