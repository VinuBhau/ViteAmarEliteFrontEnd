import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],

  server: {
  host: '0.0.0.0',
  port: process.env.PORT || 3000,
  strictPort: true,
  allowedHosts: ['viteamarelitefrontend.onrender.com'],
  cors: true,
  hmr: {
    host: 'viteamarelitefrontend.onrender.com',
    protocol: 'wss' // WebSockets over SSL
  }
}


})
