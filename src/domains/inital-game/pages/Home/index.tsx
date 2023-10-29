import { FC, useCallback } from 'react'
import { optionsPlayContainer } from './styles.css'
import Logo from '@/components/Logo'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { GameContainer } from '@/components/GameContainer'
import { useNavigate } from 'react-router-dom'
import { ImgLogo } from '@/components/ImgLogo'

export const Home: FC = () => {
  const navigate = useNavigate()

  const handleChooseGameType = useCallback((type: 'local' | 'online') => {
    const route = type === 'local' ? '/local-war' : '/create-war'
    navigate(route)
  }, [])

  return (
    <GameContainer gap={32}>
      <Reveal delay={0.15}>
        <ImgLogo />
      </Reveal>

      <Logo />

      <div className={optionsPlayContainer}>
        <Reveal delay={0.35}>
          <Button onClick={() => handleChooseGameType('local')}>
            Play local
          </Button>
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
