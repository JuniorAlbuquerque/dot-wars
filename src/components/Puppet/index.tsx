import { forwardRef, useMemo } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import {
  puppetBackground,
  puppetEye,
  puppetEyeHeight,
  puppetEyeHeightValue,
  puppetEyeWidth,
  puppetEyeWidthtValue,
  puppetEyeWrapper,
  puppetHeihgt,
  puppetHeihgtValue,
  puppetSizeIndicator,
  puppetSpacing,
  puppetStyle
} from './styles.css'
import { PuppetProps } from './types'

export const Puppet = forwardRef<HTMLDivElement, PuppetProps>(
  ({ player, size, style, withoutMargin, ...rest }, ref) => {
    const currentColor = useMemo(() => {
      if (player === 'player_one') {
        if (withoutMargin) return '#ffab1a'
        return '#ffd768'
      }

      if (withoutMargin) return '#ff0088'

      return 'hotpink'
    }, [])

    return (
      <div
        className={puppetStyle[player]}
        style={{
          ...assignInlineVars({
            [puppetSpacing]: withoutMargin ? '0' : '14px',
            [puppetBackground]: currentColor,
            [puppetHeihgt]: `${size <= 20 && size > 10 ? size * 1.35 : size}px`,
            [puppetHeihgtValue]: `${size / 1.5}px`
          }),
          ...style
        }}
        {...rest}
        ref={ref}
      >
        <p className={puppetSizeIndicator[player]}>
          {size?.toString()?.replace('0', '')}
        </p>

        <div className={puppetEyeWrapper}>
          <div
            className={puppetEye}
            style={assignInlineVars({
              [puppetEyeWidth]: size > 10 ? `${size / 2.3}px` : `${size - 2}px`,
              [puppetEyeHeight]:
                size > 10 ? `${size / 2.3}px` : `${size - 2}px`,
              [puppetEyeWidthtValue]:
                size > 10 ? `${size / 4}px` : `${size - 5}px`,
              [puppetEyeHeightValue]:
                size > 10 ? `${size / 3.5}px` : `${size - 5}px`
            })}
          ></div>
          <div
            className={puppetEye}
            style={assignInlineVars({
              [puppetEyeWidth]: size > 10 ? `${size / 2.3}px` : `${size - 2}px`,
              [puppetEyeHeight]:
                size > 10 ? `${size / 2.3}px` : `${size - 2}px`,
              [puppetEyeWidthtValue]:
                size > 10 ? `${size / 4}px` : `${size - 5}px`,
              [puppetEyeHeightValue]:
                size > 10 ? `${size / 3.5}px` : `${size - 5}px`
            })}
          ></div>
        </div>
      </div>
    )
  }
)

Puppet.displayName = 'Puppet'
