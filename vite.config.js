import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ caminho relativo seguro
  build: {
    assetsInlineLimit: 0 // ✅ NUNCA embutir imagens — sempre gerar arquivo
  }
})