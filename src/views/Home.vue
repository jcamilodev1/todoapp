<template>
  <section class="Home">
    <section class="banner">
      <img src="@/assets/bg-desktop-light.jpg"/>
    </section>
    <section class="todoContainer">
      <h1>TODO</h1>
      <article class="todoContainer__app">
        	<div class="todoContainer__app-input">
            <BaseInput />
            <BaseButton prepend-icon="mdi-plus">Create</BaseButton>
          </div>
          <article>
            <ToDo />
          </article>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
import BaseInput from '@/components/form/BaseInput.vue'
import BaseButton from '@/components/form/BaseButton.vue'
import ToDo from '@/components/form/ToDo.vue'
</script>

<style lang="scss">
.Home{
  background-color: #E4E5F1;
  min-height: 100vh;
}
.banner{
  img{
    width: 100%;
    min-height: 200px;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
.todoContainer{
  position: relative;
  z-index: 2;
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  top: -100px;
  padding: 20px;
  h1{
    color: white;
    font-size: 36px;
    @media (max-width: 800px){
      text-align: center;
    }
  }
  &__app{
    background: white;
    border-radius: 8px;
    padding: 10px;
    &-input{
      display: flex;
      gap: 20px;
    }
  }
}


</style>