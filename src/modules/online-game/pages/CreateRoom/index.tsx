import { Button } from '@/components/Button'
import { GameContainer } from '@/components/GameContainer'
import { FC, Fragment, useEffect, useState } from 'react'
import { revealWapper, createRoomContainer } from './styles.css'
import { ImgLogo } from '@/components/ImgLogo'
import { Reveal } from '@/components/Reveal'
import { Create } from '../../components/create'
import { Join } from '../../components/join'
import { useParams } from 'react-router-dom'
import { OnlineGameParams } from '../../components/roomValidator'

export const CreateRoom: FC = () => {
  const [roomState, setRoomState] = useState<'create' | 'join'>(null)
  const { room_id } = useParams<OnlineGameParams>()

  const handleChooseRoomState = (state: 'create' | 'join') => {
    setRoomState(state)
  }

  useEffect(() => {
    if (room_id) {
      setRoomState('join')
    }
  }, [room_id])

  return (
    <GameContainer gap={42}>
      <Reveal delay={0.15}>
        <ImgLogo />
      </Reveal>

      <div className={createRoomContainer}>
        {roomState === 'create' && <Create />}

        {roomState === 'join' && <Join room_id={room_id} />}

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
