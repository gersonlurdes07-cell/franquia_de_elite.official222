import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // CRITICAL: Ensures assets are loaded relatively (fixes GitHub Pages 404s)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true, // Enabled to help debug errors if they occur
    target: 'es2020', // Ensure compatibility
    minify: 'terser',
  }
})