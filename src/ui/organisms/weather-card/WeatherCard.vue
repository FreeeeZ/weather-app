<template>
  <div class="bg-white p-6 rounded-lg shadow-lg text-center">
    <h2 class="text-2xl font-bold">{{ city }}</h2>
    <p class="text-gray-600">{{ description }}</p>
    <p class="text-4xl font-bold mt-4">{{ temperature }}°C</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  city: string;
  description: string;
  temperature: number;
}>();
</script>
