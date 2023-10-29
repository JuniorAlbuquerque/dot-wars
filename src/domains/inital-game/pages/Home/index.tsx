import { FC, useCallback } from 'react'
import { logoImg, optionsPlayContainer } from './styles.css'
import logo from '@/assets/images/logo-veia-ofc.png'
import Logo from '@/components/Logo'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { GameContainer } from '@/components/GameContainer'
import { useNavigate } from 'react-router-dom'

export const Home: FC = () => {
  const navigate = useNavigate()

  const handleChooseGameType = useCallback((type: 'local' | 'online') => {
    const route = type === 'local' ? '/local-room' : '/create-room'
    navigate(route)
  }, [])

  return (
    <GameContainer gap={32}>
      <Reveal delay={0.15}>
        <img
          src={logo}
          alt="Logo Dot Wars"
          loading="lazy"
          className={logoImg}
        />
      </Reveal>

      <Logo />

      <div className={optionsPlayContainer}>
        <Reveal delay={0.35}>
          <Button>Play local</Button>
        </Reveal>

        <Reveal delay={0.45}>
          <Button onClick={() => handleChooseGameType('online')}>
            Play Online
          </Button>
        </Reveal>
      </div>
    </GameContainer>
  )
}
