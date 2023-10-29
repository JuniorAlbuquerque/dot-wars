import { FC } from 'react'
import logo from '@/assets/images/logo-veia-ofc.png'
import { logoImg } from './styles.css'

export const ImgLogo: FC = () => {
  return (
    <img src={logo} alt="Logo Dot Wars" loading="lazy" className={logoImg} />
  )
}
