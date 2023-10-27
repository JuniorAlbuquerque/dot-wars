import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import million from 'million/compiler'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({}), react(), vanillaExtractPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
})
