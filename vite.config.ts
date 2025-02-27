import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@features': path.resolve(__dirname, './src/features'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [vue(), tailwindcss(), vercel()],
  server: {
    host: 'localhost',
    port: 3000,
  },
});
