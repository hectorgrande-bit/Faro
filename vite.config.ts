import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// La app se abre siempre en http://localhost:6001.
// Si el puerto 6001 está ocupado, Vite muestra un error en lugar de usar otro puerto.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6001,
    strictPort: true,
  },
  preview: {
    port: 6001,
    strictPort: true,
  },
})
