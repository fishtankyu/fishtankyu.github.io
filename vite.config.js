import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',           // your site is at the repo root
  build: {
    outDir: 'docs'     // <-- tell Vite to write into `docs/` instead of `dist/`
  }
})
