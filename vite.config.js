import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    root: 'src',
  base: '/GymVegeINF6Projekt/',
  build: {
    assetsDir: 'assets',
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        kcmdev: path.resolve(__dirname, 'src/kcmdev.html'),
        kcmproduct: path.resolve(__dirname, 'src/kcmproduct.html'),
        kcmstore1month: path.resolve(__dirname, 'src/kcmstore1month.html'),
        kcmstore1week: path.resolve(__dirname, 'src/kcmstore1week.html'),
        kcmstore2day: path.resolve(__dirname, 'src/kcmstore2day.html'),
        devcevin: path.resolve(__dirname, 'src/DeveloperseiteCevin.html'),
        productcevin: path.resolve(__dirname, 'src/ProduktseiteCevin.html'),
        storecevin: path.resolve(__dirname, 'src/VerkaufsseiteCevin.html'),
        impressum: path.resolve(__dirname, 'src/impressum.html')
      }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}})