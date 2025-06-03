import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/GymVegeINF6Projekt/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})