import { createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  colors: {
    primary: '#ffab1a',
    secondary: '#ff0088',

    primary_bg: '#fad1b4',
    secondary_bg: '#ffb9dc'
  }
})
