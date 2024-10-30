import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    hmr: {
      overlay: false, // This might help with the JSON parse error
    }
  }
})