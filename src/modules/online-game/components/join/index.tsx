import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Reveal } from '@/components/Reveal'
import { FC, Fragment, useRef, useState } from 'react'
import { revealWapper } from '../../pages/CreateRoom/styles.css'
import { Id } from '@convex/_generated/dataModel'
import { useNavigate } from 'react-router-dom'
import { useJoinRoom } from '@/core/services/realtime'
import { updateRoomInStorage } from '@/core/services/storage'

export const Join: FC = () => {
  const [loading, setLoading] = useState(false)

  const player_name_ref = useRef<HTMLInputElement>(null)
  const room_id_ref = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const joinRoom = useJoinRoom()

  const handleJoinRoom = async () => {
    const player_name = player_name_ref.current.value
    const room_id = room_id_ref.current.value as Id<'rooms'>

    setLoading(true)

    try {
      await joinRoom(room_id, player_name)

      updateRoomInStorage({
        room_id,
        player: 'player_two',
        player_name
      })

      navigate(`/war/${room_id}`)
    } catch (error) {
      console.warn('error', error)
    } finally {
      setLoading(false)
    }
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
          {loading ? 'Joining...' : 'Join room'}
        </Button>
      </Reveal>
    </Fragment>
  )
}
