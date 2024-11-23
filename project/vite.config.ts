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
        rewrite: (path) => path.replace(/^\/api\/getproductdefinition/, 'https://eureka.innotrat.in/product/61630893-6873-456c-bc38-b9d7eb7bcedb/definition'),
      },
      '/api/create-productdefinition': {
        target: 'https://eureka.innotrat.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/create-productdefinition/, 'https://eureka.innotrat.in/product/61630893-6873-456c-bc38-b9d7eb7bcedb/definition'),
      },
      '/api/delete-productdefinition': {
        target: 'https://eureka.innotrat.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/delete-productdefinition/, 'https://eureka.innotrat.in/product/61630893-6873-456c-bc38-b9d7eb7bcedb/definition'),
      },
      '/api/start-device': {
        target: 'https://eureka.innotrat.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/start-device/, 'https://eureka.innotrat.in/product/61630893-6873-456c-bc38-b9d7eb7bcedb/devices/control'),
      },
      '/api/stop-device': {
        target: 'https://eureka.innotrat.in',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/stop-device/, 'https://eureka.innotrat.in/product/61630893-6873-456c-bc38-b9d7eb7bcedb/devices/control'),
      },
    },
  },
});
