import { css } from '@styled/css'
import { HTMLAttributes, forwardRef } from 'react'

type PuppetProps = HTMLAttributes<HTMLDivElement> & {
  size: number
  color: 'pink' | 'orange'
}

export const Puppet = forwardRef<HTMLDivElement, PuppetProps>(
  ({ color, size, style, ...rest }, ref) => (
    <div
      className={css({
        display: 'block',
        bg: color === 'orange' ? 'orange.500' : 'hotpink',
        borderRadius: '40% 40% 40% 40% / 20% 20% 20% 20%',
        cursor: 'pointer',
        pos: 'relative',
        boxShadow: '0px 15px 10px -5px rgba(40, 40, 40, 0.222)'
      })}
      style={{
        width: size < 11 ? size + 7 : size,
        height: size < 11 ? size * 1.8 : size * 1.1,
        ...style
      }}
      {...rest}
      ref={ref}
    >
      <div
        className={css({
          pos: 'absolute',
          top: 1,
          left: '50%',
          transform: 'translate(-50%, 20%)',
          gap: 1,
          display: 'flex'
        })}
      >
        <div
          className={css({
            bg: 'white',
            opacity: 0.3
          })}
          style={{
            width: size / 3,
            height: size / 3,
            borderRadius: size / 8
          }}
        ></div>
        <div
          className={css({
            bg: 'white',
            opacity: 0.3
          })}
          style={{
            width: size / 3,
            height: size / 3,
            borderRadius: size / 8
          }}
        ></div>
      </div>
    </div>
  )
)

Puppet.displayName = 'Puppet'
