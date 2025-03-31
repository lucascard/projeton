import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Ajuste a URL do backend conforme necessário
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia'], // Adicione as dependências aqui
  },
});