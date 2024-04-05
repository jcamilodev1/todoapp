<template>
  <article
    v-for="todo in todos"
    :key="todo.id"
    class="todo"
    :class="{ 'is-active': todo.active }"
  >
    <div class="todo__check">
      <v-checkbox
        v-model="todo.active"
        hide-details
        @change="updateTodo(todo)"
      ></v-checkbox>
      <p>{{ todo.name }}</p>
    </div>
    <div>
      <v-icon
        icon="mdi-pencil"
        color="primary"
        @click="editTodo(todo)"
      ></v-icon>
      <v-icon
        icon="mdi-trash-can"
        color="error"
        @click="useStore.remove(todo.id)"
      ></v-icon>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Todo {
  id: number;
  name: string;
  active: boolean;
}

import { useTodoStore } from "@/stores/todoStore";
const useStore = useTodoStore();
const emit = defineEmits(["edit-todo"]);

const editTodo = (todo) => {
  emit("edit-todo", todo);
};

const props = defineProps<{
  todos: Todo[];
}>();

const updateTodo = (todo) => {
  useStore.update(todo.id, todo.name);
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    .v-icon {
      cursor: pointer;
    }
  }
  p {
    max-width: 200px;
  }
  &.is-active {
    .todo__check {
      opacity: 0.5;
    }
    p {
      text-decoration: line-through;
    }
  }
}
</style>
