import { Player } from '@/store/game/game.models'
import { css } from '@styled/css'
import { HTMLAttributes, forwardRef, useMemo } from 'react'

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
        className={css({
          mr: withoutMargin ? 0 : 8,
          cursor: 'pointer',
          pos: 'relative',
          boxShadow: '0px 15px 10px -5px rgba(40, 40, 40, 0.222)',
          mt: size,
          _after: {
            content: '""',
            background: player === 'player_one' ? '#ffab1a' : '#ff0088',
            position: 'absolute',
            left: '-4.5%',
            top: 0,
            width: '110%',
            height: '100%',
            zIndex: -1
          },
          _before: {
            content: '""',
            background: player === 'player_one' ? '#ffab1a' : '#ff0088',
            position: 'absolute',
            left: 0,
            top: '-4%',
            width: '100%',
            height: '110%',
            zIndex: -1
          }
        })}
        style={{
          minWidth: size < 11 ? size + 7 : size,
          height: size < 11 ? size * 1.8 : size * 1.1,
          backgroundColor: currentColor,
          ...style
        }}
        {...rest}
        ref={ref}
      >
        <p
          className={css({
            pos: 'absolute',
            top: -7,
            left: '50%',
            transform: 'translate(-50%, 20%)',
            px: 2,
            color: 'white',
            bg: '#fffffff2'
          })}
          style={{
            border: `1px solid ${
              player === 'player_one' ? '#ffab1a' : '#ff0088'
            }`,
            color: player === 'player_one' ? '#ffab1a' : '#ff0088'
          }}
        >
          {size?.toString()?.replace('0', '')}
        </p>

        <div
          className={css({
            w: '100%',
            gap: 1,
            mt: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          })}
        >
          <div
            className={css({
              bg: 'white',
              opacity: 0.45
            })}
            style={{
              width: size / 3,
              height: size / 3
            }}
          ></div>
          <div
            className={css({
              bg: 'white',
              opacity: 0.45
            })}
            style={{
              width: size / 3,
              height: size / 3
            }}
          ></div>
        </div>
      </div>
    )
  }
)

Puppet.displayName = 'Puppet'
