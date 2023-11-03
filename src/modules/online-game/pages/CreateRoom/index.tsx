import { Button } from '@/components/Button'
import { GameContainer } from '@/components/GameContainer'
import { FC, Fragment, useState } from 'react'
import { revealWapper, createRoomContainer } from './styles.css'
import { ImgLogo } from '@/components/ImgLogo'
import { Reveal } from '@/components/Reveal'
import { Create } from '../../components/create'
import { Join } from '../../components/join'

export const CreateRoom: FC = () => {
  const [roomState, setRoomState] = useState<'create' | 'join'>(null)

  const handleChooseRoomState = (state: 'create' | 'join') => {
    setRoomState(state)
  }

  return (
    <GameContainer gap={42}>
      <Reveal delay={0.15}>
        <ImgLogo />
      </Reveal>

      <div className={createRoomContainer}>
        {roomState === 'create' && <Create />}

        {roomState === 'join' && <Join />}

        {!roomState && (
          <Fragment>
            <Reveal delay={0.25} className={revealWapper}>
              <Button fullWidth onClick={() => handleChooseRoomState('create')}>
                Create New Room
              </Button>
            </Reveal>

            <Reveal delay={0.35} className={revealWapper}>
              <Button fullWidth onClick={() => handleChooseRoomState('join')}>
                Join Room
              </Button>
            </Reveal>
          </Fragment>
        )}
      </div>
    </GameContainer>
  )
}
