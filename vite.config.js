import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
