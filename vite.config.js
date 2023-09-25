import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: false,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // Default and port default
  base: '/',
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
