import { FC } from 'react'
import { logoImg } from './styles.css'

export const ImgLogo: FC = () => {
  return (
    <img
      src="/logo-dot.png"
      alt="Logo Dot Wars"
      loading="lazy"
      className={logoImg}
    />
  )
}
