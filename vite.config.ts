import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// La app se abre siempre en http://localhost:3000.
// Si el puerto 3000 está ocupado, Vite muestra un error en lugar de usar otro puerto.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
})
