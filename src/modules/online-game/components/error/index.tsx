import { GameContainer } from '@/components/GameContainer'
import { FC, useMemo } from 'react'
import { errorContainer, puppetsWrapper } from './styles.css'
import { Button } from '@/components/Button'
import { useNavigate } from 'react-router-dom'
import { PuppetIcon } from '@/components/PuppetIcon'

type FallbackErrorProps = {
  error: Error
}

export const FallbackError: FC<FallbackErrorProps> = ({ error }) => {
  const navigate = useNavigate()

  const currentError = useMemo(() => {
    if (error?.message?.includes('validator')) {
      return 'Oh no, room not found!'
    }

    return 'Unexpected error occurred'
  }, [])

  return (
    <GameContainer>
      <div className={errorContainer}>
        <h1>{currentError}</h1>

        <div className={puppetsWrapper}>
          <PuppetIcon color="secondary" />
          <PuppetIcon color="primary" />
        </div>

        <Button
          onClick={() => {
            navigate('/create-war')
          }}
        >
          Create or Join
        </Button>
      </div>
    </GameContainer>
  )
}
