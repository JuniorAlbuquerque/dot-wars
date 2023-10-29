import { Button } from '@/components/Button'
import { GameContainer } from '@/components/GameContainer'
import { Input } from '@/components/Input'
import { FC, Fragment, useRef, useState } from 'react'
import { revealWapper, createRoomContainer } from './styles.css'
import { ImgLogo } from '@/components/ImgLogo'
import { Reveal } from '@/components/Reveal'

export const CreateRoom: FC = () => {
  const player_name_ref = useRef<HTMLInputElement>(null)
  const room_id_ref = useRef<HTMLInputElement>(null)

  const [roomState, setRoomState] = useState<'create' | 'join'>(null)

  const handleCreateRoom = () => {
    const player_name = player_name_ref.current.value

    console.log(player_name)
  }

  const handleChooseRoomState = (state: 'create' | 'join') => {
    setRoomState(state)
  }

  return (
    <GameContainer gap={42}>
      <Reveal delay={0.15}>
        <ImgLogo />
      </Reveal>

      <div className={createRoomContainer}>
        {roomState === 'create' && (
          <Fragment>
            <Reveal delay={0.25} className={revealWapper}>
              <Input label="Your name" ref={player_name_ref} />
            </Reveal>

            <Reveal delay={0.35} className={revealWapper}>
              <Button fullWidth onClick={handleCreateRoom}>
                Create
              </Button>
            </Reveal>
          </Fragment>
        )}

        {roomState === 'join' && (
          <Fragment>
            <Reveal delay={0.25} className={revealWapper}>
              <Input label="Room Id" ref={room_id_ref} />
            </Reveal>

            <Reveal delay={0.35} className={revealWapper}>
              <Button fullWidth onClick={handleCreateRoom}>
                Join
              </Button>
            </Reveal>
          </Fragment>
        )}

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
