<template>
  <div class="flex gap-2 mb-5">
    <Input
      v-model="query"
      class="w-1/5"
      placeholder="Введите название города"
    />
    <Button @click="onSearch">Search</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '@ui/atoms/input/Input.vue';
import Button from '@ui/atoms/button/Button.vue';

const query = ref('');

const emit = defineEmits<{
  (e: 'search', query: string): void;
}>();

const onSearch = () => {
  emit('search', query.value);
};
</script>
