import { ButtonHTMLAttributes, FC } from 'react'
import { buttonStyle } from './styles.css'
import unlock from '@/assets/material_product_sounds/wav/primary/ui_unlock.wav'
import useSound from 'use-sound'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  const [playClick] = useSound(unlock, {
    volume: 2.2
  })

  return (
    <button
      {...rest}
      className={buttonStyle}
      onMouseDown={() => {
        playClick()
      }}
    >
      {children}
    </button>
  )
}
