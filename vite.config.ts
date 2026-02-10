import fs from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), {
    name: 'copy-manifest',
    closeBundle() {
      fs.copyFileSync(
        resolve(__dirname, 'manifest.json'),
        resolve(__dirname, 'dist/manifest.json'),
      )
    },
  }],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: 'index.html',
        content: 'src/content/inject.ts',
      },
      output: {
        entryFileNames: (asset) => {
          return asset.name === 'content' ? 'content.js' : '[name].js'
        },
      },
    },
  },
})
