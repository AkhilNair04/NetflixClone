import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace "your-repo-name" with your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/NetflixClone/',
});
