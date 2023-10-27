import { Player } from '@/store/game/game.models'
import { HTMLAttributes, forwardRef, useMemo } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import {
  puppetBackground,
  puppetEye,
  puppetEyeHeight,
  puppetEyeWidth,
  puppetEyeWrapper,
  puppetHeihgt,
  puppetSizeIndicator,
  puppetSpacing,
  puppetStyle,
  puppetWidth
} from './styles.css'

type PuppetProps = HTMLAttributes<HTMLDivElement> & {
  size: number
  player: Player
  withoutMargin?: boolean
}

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
            [puppetSpacing]: withoutMargin ? '0' : '24px',
            [puppetBackground]: currentColor,
            [puppetWidth]: size < 11 ? `${size + 7}px` : `${size}px`,
            [puppetHeihgt]: size < 11 ? `${size * 1.8}px` : `${size * 1.1}px`
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
              [puppetEyeWidth]: `${size / 2.5}px`,
              [puppetEyeHeight]: `${size / 2.5}px`
            })}
          ></div>
          <div
            className={puppetEye}
            style={assignInlineVars({
              [puppetEyeWidth]: `${size / 2.5}px`,
              [puppetEyeHeight]: `${size / 2.5}px`
            })}
          ></div>
        </div>
      </div>
    )
  }
)

Puppet.displayName = 'Puppet'
