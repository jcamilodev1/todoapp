<template>
  <section class="Home">
    <section class="banner">
      <img src="@/assets/bg-desktop-light.jpg" />
    </section>
    <section class="todoContainer">
      <h1>TODO</h1>
      <article class="todoContainer__app">
        <div class="todoContainer__app-input">
          <!-- <BaseInput v-model="todoValue" /> -->
          <v-text-field
            class="custom-counter"
            label="Label"
            variant="outlined"
            density="compact"
            :counter="36"
            :maxlength="36"
            hide-details
            v-model="todoValue"
            @keyup.enter="createTodo"
          ></v-text-field>
          <BaseButton v-if="!edit" prepend-icon="mdi-plus" @click="createTodo"
            >Create</BaseButton
          >
          <BaseButton v-else prepend-icon="mdi-plus" @click="updateTodo"
            >Update</BaseButton
          >
        </div>
        <article class="todoContainer__main">
          <ToDo :todos="filteredTodos" @edit-todo="handleEditTodo" />
        </article>
        <article class="todoContainer__footer">
          <v-btn
            class="text-capitalize text-primary btn"
            variant="text"
            @click="
              () => {
                showAllTodos(), stateBtn('all');
              }
            "
            :class="stateData == 'all' ? 'btn-active' : ''"
          >
            All
          </v-btn>
          <v-btn
            class="text-capitalize text-primary btn"
            variant="text"
            @click="
              () => {
                findPending(), stateBtn('pending');
              }
            "
            :class="stateData == 'pending' ? 'btn-active' : ''"
          >
            Pending
          </v-btn>
          <v-btn
            class="text-capitalize text-primary btn"
            variant="text"
            @click="
              () => {
                findCompleted(), stateBtn('completed');
              }
            "
            :class="stateData == 'completed' ? 'btn-active' : ''"
          >
            Completed
          </v-btn>
          <v-btn
            class="text-capitalize text-error btn"
            variant="text"
            @click="
              () => {
                clearCompleted(), stateBtn('clear');
              }
            "
            :class="stateData == 'clear' ? 'btn-active' : ''"
          >
            Clear completed
          </v-btn>
        </article>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
// import BaseInput from "@/components/form/BaseInput.vue";
import BaseButton from "@/components/form/BaseButton.vue";
import ToDo from "@/components/form/ToDo.vue";
import { ref, computed } from "vue";
import { useTodoStore } from "@/stores/todoStore";
const useStore = useTodoStore();

const todos = computed(() => useStore.todos);
const filteredTodos = computed(() => useStore.filteredTodos);

const edit = ref(false);

const stateData = ref();

const stateBtn = (state) => {
  stateData.value = state;
};

const {
  add,
  update,
  findCompleted,
  findPending,
  clearCompleted,
  showAllTodos,
} = useStore;

showAllTodos();

console.log(filteredTodos);

const todoValue = ref("");
const editTodo = ref({});

const handleEditTodo = (todo) => {
  edit.value = true;
  editTodo.value = todo;
  todoValue.value = todo.name;
};

const createTodo = () => {
  if (todoValue.value.trim() === "") {
    return;
  }
  add({
    id: Math.floor(Math.random() * 1000),
    name: todoValue.value.trim(),
    active: false,
  });
  todoValue.value = "";
};

const updateTodo = () => {
  update(editTodo.value.id, todoValue.value);
};
</script>

<style lang="scss">
.Home {
  background-color: #e4e5f1;
  min-height: 100vh;
}
.banner {
  img {
    width: 100%;
    min-height: 200px;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
.todoContainer {
  position: relative;
  z-index: 2;
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  top: -100px;
  padding: 20px;
  h1 {
    color: white;
    font-size: 36px;
    @media (max-width: 800px) {
      text-align: center;
    }
  }
  &__app {
    background: white;
    border-radius: 8px;

    &-input {
      display: flex;
      gap: 20px;
      padding: 1rem;
      border-bottom: 1px solid #e7e7e7;
    }
  }
  &__main {
    padding: 1rem;
  }
  &__footer {
    padding: 1rem;
    border-top: 1px solid #e7e7e7;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
  }
}

.btn {
  font-size: small;
  padding: 0;
  min-width: unset;
}

.btn-active {
  font-weight: 600;
  text-decoration: underline;
  filter: opacity(150%);
}
</style>
