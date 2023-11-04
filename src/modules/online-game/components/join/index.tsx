import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Reveal } from '@/components/Reveal'
import { FC, Fragment, useEffect, useRef, useState } from 'react'
import { revealWapper } from '../../pages/CreateRoom/styles.css'
import { Id } from '@convex/_generated/dataModel'
import { useNavigate } from 'react-router-dom'
import { useJoinRoom } from '@/core/services/realtime'
import {
  getRoomFromStorage,
  updateRoomInStorage
} from '@/core/services/storage'

type JoinProps = {
  room_id?: string
}

export const Join: FC<JoinProps> = ({ room_id }) => {
  const [loading, setLoading] = useState(false)

  const player_name_ref = useRef<HTMLInputElement>(null)
  const room_id_ref = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const joinRoom = useJoinRoom()

  const handleJoinRoom = async () => {
    const player_name = player_name_ref.current.value
    const room_id = room_id_ref.current.value as Id<'rooms'>

    const existsRoomInStorage = getRoomFromStorage(room_id)

    if (existsRoomInStorage) {
      navigate(`/war/${room_id}`)
      return
    }

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

  useEffect(() => {
    if (room_id) {
      room_id_ref.current.value = room_id
      player_name_ref.current.focus()
    }
  }, [room_id])

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
