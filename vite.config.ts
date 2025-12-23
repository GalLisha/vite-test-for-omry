import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/vite-test-for-omry/', // <--- use your repo name here
  plugins: [react()],
})


