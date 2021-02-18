<template>
  <div>
    <ul v-if="todos && todos.length > 0">
      <li v-for="item in todos" :key="item.id">
<!--        Setze die Checkbox auf den jeweiligen Wert in der done-Spalte-->
        <input type="checkbox" v-model="item.done"/>
<!--        Setze Klasse .done nur, wenn done=true -->
<!--        v-model lässt zu, den Wert einer Variablen auszulesen und zu verändern-->
        <input name="todo" :class="{'done': item.done}" v-model="item.text">
<!--        <button class="btn-sm btn-info d-inline-block ml-2">-->
<!--          <font-awesome-icon icon="save"/>-->
<!--          Save-->
<!--        </button>-->
      </li>
    </ul>
    <h5 v-else>Keine Daten vorhanden</h5>

  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ['todos'],
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
input[name="todo"] {
  border: none;
  width: 80%;
}
input[type="checkbox"] {
  margin-right: 5px;
}
ul {
  width: 80%;
  margin: auto;
}
li {
  list-style: none;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 3px;
  padding: 3px;
}
</style>