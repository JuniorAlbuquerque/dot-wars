import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Reveal } from '@/components/Reveal'
import { FC, Fragment, useRef } from 'react'
import { revealWapper } from '../../pages/CreateRoom/styles.css'

export const Join: FC = () => {
  const player_name_ref = useRef<HTMLInputElement>(null)
  const room_id_ref = useRef<HTMLInputElement>(null)

  const handleJoinRoom = () => {
    const player_name = player_name_ref.current.value

    console.log(player_name)
  }

  return (
    <Fragment>
      <Reveal delay={0.25} className={revealWapper}>
        <Input label="Your name" ref={player_name_ref} />
      </Reveal>

      <Reveal delay={0.25} className={revealWapper}>
        <Input label="Room Id" ref={room_id_ref} />
      </Reveal>

      <Reveal delay={0.35} className={revealWapper}>
        <Button fullWidth onClick={() => handleJoinRoom()}>
          Join Room
        </Button>
      </Reveal>
    </Fragment>
  )
}
