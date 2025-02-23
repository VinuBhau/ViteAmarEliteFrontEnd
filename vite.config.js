import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],

  server: {
    host: '0.0.0.0',  // Bind to all network interfaces
    port: process.env.PORT || 3000,  // Use Render's provided port or default to 3000
  }
  

})
