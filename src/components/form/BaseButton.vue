<template>
  <v-btn v-bind="$attrs" color="primary">
    <slot />
  </v-btn>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.v-btn{
  height: 40px;
}

</style>