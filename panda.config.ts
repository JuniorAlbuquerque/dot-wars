import { defineConfig } from '@pandacss/dev'
import { layerStyles } from './styles/layers'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  staticCss: {
    css: [
      {
        properties: {
          color: ['gray.200', 'gray.300']
        }
      }
    ]
  },

  // Useful for theme customization
  theme: {
    extend: {
      layerStyles
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
})
