import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import './style.css';
import './assets/styles/tailwind.css';

const head = createHead();
const app = createApp(App);

app.use(head);
app.mount('#app');
