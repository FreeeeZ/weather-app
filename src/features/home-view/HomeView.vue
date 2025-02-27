<template>
  <div class="container mx-auto p-4">
    <SearchBar @search="fetchWeather" />
    <WeatherCard
      v-if="weatherData"
      :city="weatherData.city"
      :description="weatherData.description"
      :temperature="weatherData.temperature"
    />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

import SearchBar from '@ui/molecules/search-bar/SearchBar.vue';
import WeatherCard from '@ui/organisms/weather-card/WeatherCard.vue';
import { useWeather } from './hooks/useWeather';

const { weatherData, fetchWeather } = useWeather();

useHead({
  title: 'Weather App',
  meta: [
    {
      name: 'description',
      content: 'A simple weather app built with Vue 3 and Tailwind CSS',
    },
  ],
});
</script>
