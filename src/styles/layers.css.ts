import { globalStyle } from '@vanilla-extract/css'
import { pressstart2p } from './fonts.css'

const parentElements = ['canvas', 'iframe', 'img', 'svg', 'video']
const childElements = ['svg *', 'symbol *']

globalStyle('html, body', {
  margin: 0,
  fontFamily: `${pressstart2p}, sans-serif !important`,
  fontWeight: 400,
  overflow: 'hidden !important'
})

globalStyle(`*:not(${[...parentElements, ...childElements].join()})`, {
  all: 'unset',
  display: 'revert'
})

globalStyle('*, button, input, div, *::before, *::after', {
  boxSizing: 'border-box'
})
