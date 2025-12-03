import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/Portafolio/',
}))
<<<<<<< HEAD
=======

>>>>>>> 3e0a88ff790190e02b3d6009023311c9f20eb29a
