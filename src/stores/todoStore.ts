import { defineStore } from "pinia";
import { ref } from "vue";

interface Todo {
  id: number;
  name: string;
  active: boolean;
}

export const useTodoStore = defineStore("todoStore", () => {
  const todos = ref<Todo[]>([]);

  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos.value = JSON.parse(storedTodos);
  }

  const add = (todo: Todo) => {
    todos.value.push(todo);
    updateStoredTodos();
  };

  const remove = (id: number) => {
    todos.value = todos.value.filter((item) => item.id !== id);
    updateStoredTodos();
    filteredTodos.value = todos.value;
  };

  const update = (id: number, newName: string) => {
    console.log(newName, id);
    todos.value.forEach((item) => {
      if (item.id === id) {
        item.name = newName;
      }
    });
    updateStoredTodos();
  };

  const filteredTodos = ref([]);

  const updateStoredTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos.value));
  };

  const findCompleted = () => {
    filteredTodos.value = todos.value.filter((item) => item.active);
  };

  const findPending = () => {
    filteredTodos.value = todos.value.filter((item) => item.active === false);
  };

  const clearCompleted = () => {
    filteredTodos.value = todos.value.forEach((item) => {
      item.active = false;
    });
  };

  const showAllTodos = () => {
    filteredTodos.value = todos.value;
  };

  return {
    todos,
    add,
    remove,
    update,
    findCompleted,
    findPending,
    clearCompleted,
    showAllTodos,
    filteredTodos,
  };
});
