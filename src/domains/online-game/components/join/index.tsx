import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Reveal } from '@/components/Reveal'
import { FC, Fragment, useRef, useState } from 'react'
import { revealWapper } from '../../pages/CreateRoom/styles.css'
import { useMutation } from 'convex/react'
import { api } from '@convex/_generated/api'
import { Id } from '@convex/_generated/dataModel'
import { useNavigate } from 'react-router-dom'
import { encryptStorage } from '@/utils/storage'

export const Join: FC = () => {
  const [loading, setLoading] = useState(false)

  const player_name_ref = useRef<HTMLInputElement>(null)
  const room_id_ref = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const joinRoom = useMutation(api.rooms.joinRoom)

  const handleJoinRoom = async () => {
    const player_name = player_name_ref.current.value
    const room_id = room_id_ref.current.value as Id<'rooms'>

    setLoading(true)

    try {
      await joinRoom({
        room_id,
        player_name
      })

      encryptStorage.setItem('room', room_id)
      encryptStorage.setItem('player', 'player_two')

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
