import { GameContainer } from '@/components/GameContainer'
import { FC } from 'react'
import { Button } from '@/components/Button'
import { useNavigate } from 'react-router-dom'
import { notFoundContainer } from './styles.css'

const NotFound: FC = () => {
  const navigate = useNavigate()

  return (
    <GameContainer>
      <div className={notFoundContainer}>
        <h1>404</h1>

        <p>no dot war found!</p>

        <Button
          onClick={() => {
            navigate('/')
          }}
        >
          Go to home
        </Button>
      </div>
    </GameContainer>
  )
}

export default NotFound
