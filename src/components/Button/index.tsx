import { ButtonHTMLAttributes, FC } from 'react'
import { buttonStyle } from './styles.css'
import unlock from '@/assets/material_product_sounds/wav/primary/ui_unlock.wav'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from 'use-sound'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean
}

export const Button: FC<ButtonProps> = ({ children, fullWidth, ...rest }) => {
  const [playClick] = useSound(unlock, {
    volume: 2.2
  })

  return (
    <button
      {...rest}
      className={buttonStyle[fullWidth ? 'fullWidth' : 'base']}
      onMouseDown={() => {
        playClick()
      }}
    >
      {children}
    </button>
  )
}
