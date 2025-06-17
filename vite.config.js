import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '6cfd-2405-201-c024-173-485e-479a-f424-9373.ngrok-free.app'
    ]
  }
})
