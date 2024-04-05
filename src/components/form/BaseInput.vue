<template>
  <v-text-field
    class="custom-counter"
    label="Label"
    variant="outlined"
    density="compact"
    :counter="36"
    :maxlength="36"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
    hide-details
    :value="modelValue"
  ></v-text-field>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String],
    default: "",
  },
  name: {
    type: String,
  },
});
const setEvent = (event: Event) => {
  const target = event.target as HTMLInputElement;
  return target.value ?? "";
};
</script>

<style lang="scss">
.v-input {
  position: relative;
}
.custom-counter .v-text-field__slot {
  position: relative;
}
.custom-counter .v-counter {
  position: absolute;
  bottom: 25px;
  right: 15px;
}
</style>
