import { ref } from 'vue';

interface WeatherData {
  city: string;
  description: string;
  temperature: number;
}

export function useWeather() {
  const weatherData = ref<WeatherData | null>(null);

  const fetchWeather = async (city: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY}&units=metric`,
    );
    const data = await response.json();

    if (data.cod === 200) {
      weatherData.value = {
        city: data.name,
        description: data.weather[0].description,
        temperature: data.main.temp,
      };
    } else {
      weatherData.value = null;
    }
  };

  return {
    weatherData,
    fetchWeather,
  };
}
