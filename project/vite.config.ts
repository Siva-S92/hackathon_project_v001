import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/getproductdefinition': {
        target: 'https://eureka.innotrat.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/getproductdefinition/, 'https://eureka.innotrat.in/product/6905855f-f441-48de-9ca4-103e535cfab8/definition'),
      },
      '/api/create-productdefinition': {
        target: 'https://eureka.innotrat.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/create-productdefinition/, 'https://eureka.innotrat.in/product/6905855f-f441-48de-9ca4-103e535cfab8/definition'),
      },
      '/api/delete-productdefinition': {
        target: 'https://eureka.innotrat.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/delete-productdefinition/, 'https://eureka.innotrat.in/product/6905855f-f441-48de-9ca4-103e535cfab8/definition'),
      },
    },
  },
});
