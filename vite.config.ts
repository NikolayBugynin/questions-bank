import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // теперь будет 3000
    open: true, // браузер откроется сам
  },
});
