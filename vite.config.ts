import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import million from 'million/compiler'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({}), react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@styled', replacement: path.resolve(__dirname, 'styled-system') }
    ]
  }
})
