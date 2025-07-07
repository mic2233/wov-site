// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';   // ← make sure this line is here
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],                       // ← …and this one
  base:"/wov-site"
});