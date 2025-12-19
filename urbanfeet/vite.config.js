import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Network par expose karega
    port: 5173, // Default port, chahe to change kar sakte hain
  },
})
