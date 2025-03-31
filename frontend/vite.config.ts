import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173, // Altere para a porta desejada
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia'], // Adicione as dependências principais aqui
  },
});