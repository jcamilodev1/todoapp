<template>
  <article class="todo" :class="active && 'is-active'">
    <div class="todo__check">
      <v-checkbox v-model="active" hide-details></v-checkbox>
      <p>Hola mundo</p>
    </div>
    <div>
      <v-icon icon="mdi-pencil" color="primary"></v-icon>
      <v-icon icon="mdi-trash-can" color="error"></v-icon>
    </div>
  </article>
</template>

<script setup>
  import { ref } from 'vue'
  const active = ref(false)
</script>

<style lang="scss" scoped>
.todo{
  display: flex;
  align-items: center;
  justify-content: space-between;
  div{
    display: flex;
    align-items: center;
    gap: 10px;
    .v-icon{
      cursor: pointer;
    }
  }
  p{
    max-width: 200px;
  }
  &.is-active{
    .todo__check{
      opacity: 0.5;
    }
    p{
      text-decoration: line-through;
    }
  }
}

</style>