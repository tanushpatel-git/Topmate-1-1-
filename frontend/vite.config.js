import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { boneyardPlugin } from 'boneyard-js/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(), boneyardPlugin()],
  server: {
    port: 5175,
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
})