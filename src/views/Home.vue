<template>
  <section class="Home">
    <section class="banner">
      <img src="@/assets/bg-desktop-light.jpg"/>
    </section>
    <section class="todoContainer">
      <h1>TODO</h1>
      <article class="todoContainer__app">
          <BaseInput />
          <BaseButton>Create</BaseButton>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
import BaseInput from '@/components/form/BaseInput.vue'
import BaseButton from '@/components/form/BaseButton.vue'
</script>

<style lang="scss">
.Home{
  background-color: #E4E5F1;
  min-height: 100vh;
}
.banner{
  img{
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
  h1{
    color: white;
    font-size: 36px;
  }
  &__app{
    background: white;
    border-radius: 8px;
    padding: 10px;
    
  }
}


</style>