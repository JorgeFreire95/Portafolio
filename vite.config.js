import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Usar rutas relativas evita problemas con mayúsculas/minúsculas y subpaths en Pages
  // Esto genera referencias a `assets/...` en lugar de `/MiPortafolio/assets/...`
  base: './',
  plugins: [react()],
})
