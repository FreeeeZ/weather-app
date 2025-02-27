<template>
  <input
    class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

defineEmits(['update:modelValue']);
</script>
