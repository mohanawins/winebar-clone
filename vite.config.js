import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/winebar-clone/', // IMPORTANT: must match repo name
})
