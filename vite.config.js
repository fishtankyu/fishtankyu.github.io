import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',           // your site is at the repo root
  build: {
    outDir: 'docs'     // <-- Output to `docs/` folder instead of `dist/`
  }
})

