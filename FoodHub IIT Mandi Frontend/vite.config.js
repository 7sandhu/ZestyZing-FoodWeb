import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/FoodHub-IIT-Mandi/',
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist'
  }
})
