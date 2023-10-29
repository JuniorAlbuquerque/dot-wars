import { createVar, style, styleVariants } from '@vanilla-extract/css'

export const puppetSpacing = createVar()
export const puppetBackground = createVar()
export const puppetHeihgt = createVar()
export const puppetHeihgtValue = createVar()
export const puppetMargin = createVar()

const puppetBase = style({
  padding: 12,
  marginRight: puppetSpacing,
  background: puppetBackground,
  height: puppetHeihgtValue,
  cursor: 'pointer',
  position: 'relative',
  boxShadow: '0px 15px 10px -5px rgba(40, 40, 40, 0.222)',

  '@media': {
    'screen and (min-width: 768px)': {
      height: puppetHeihgt,
      vars: {
        [puppetHeihgt]: puppetHeihgt
      }
    }
  },

  ':after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-4.5%',
    width: '110%',
    height: '100%',
    zIndex: -1
  },

  ':before': {
    content: '""',
    position: 'absolute',
    top: '-4%',
    left: 0,
    width: '100%',
    height: '110%',
    zIndex: -1
  }
})

export const puppetStyle = styleVariants({
  player_one: [
    puppetBase,
    {
      ':after': {
        background: '#ffab1a'
      },
      ':before': {
        background: '#ffab1a'
      }
    }
  ],
  player_two: [
    puppetBase,
    {
      ':after': {
        background: '#ff0088'
      },
      ':before': {
        background: '#ff0088'
      }
    }
  ]
})

const puppetSizeIndicatorBase = style({
  position: 'absolute',
  top: -16,
  left: '50%',
  transform: 'translate(-50%, 20%)',
  padding: '2px 8px',
  color: 'white',
  background: '#fffffff2',
  border: '1px solid'
})

export const puppetSizeIndicator = styleVariants({
  player_one: [
    puppetSizeIndicatorBase,
    {
      borderColor: '#ffab1a',
      color: '#ffab1a'
    }
  ],
  player_two: [
    puppetSizeIndicatorBase,
    {
      borderColor: '#ff0088',
      color: '#ff0088'
    }
  ]
})

export const puppetEyeWidth = createVar()
export const puppetEyeHeight = createVar()
export const puppetEyeWidthtValue = createVar()
export const puppetEyeHeightValue = createVar()

export const puppetEye = style({
  background: 'white',
  opacity: 0.45,
  width: puppetEyeWidthtValue,
  height: puppetEyeHeightValue,

  '@media': {
    'screen and (min-width: 768px)': {
      width: puppetEyeWidth,
      height: puppetEyeHeight,
      vars: {
        [puppetEyeWidth]: puppetEyeWidth,
        [puppetEyeHeight]: puppetEyeHeight
      }
    }
  }
})

export const puppetEyeWrapper = style({
  width: '100%',
  gap: 6,
  marginTop: 1.4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
