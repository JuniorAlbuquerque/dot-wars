import { globalStyle } from '@vanilla-extract/css'
import { pressstart2p } from './fonts.css'

const parentElements = ['canvas', 'iframe', 'img', 'svg', 'video']
const childElements = ['svg *', 'symbol *']

/* FIX 100VH IOS */
globalStyle('body', {
  height: '-webkit-fill-available',

  '@supports': {
    '(-webkit-touch-callout: none)': {
      height: '-webkit-fill-available'
    }
  }
})

globalStyle('#root', {
  height: '100dvh'
})

globalStyle('html, body', {
  margin: 0,
  fontFamily: `${pressstart2p}, sans-serif !important`,
  fontWeight: 400
})

globalStyle(`*:not(${[...parentElements, ...childElements].join()})`, {
  all: 'unset',
  display: 'revert'
})

globalStyle('*, button, input, div, *::before, *::after', {
  boxSizing: 'border-box !important' as 'border-box'
})
