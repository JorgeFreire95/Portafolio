import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Para GitHub Pages en repositorios de proyecto, usar /nombre-repo/
  base: '/Portafolio/',
  plugins: [react()],
})
