import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Reveal } from '@/components/Reveal'
import { FC, Fragment, useRef, useState } from 'react'
import { revealWapper } from '../../pages/CreateRoom/styles.css'
import { useNavigate } from 'react-router-dom'
import { useCreateRoom } from '@/core/services/realtime'
import { saveRoomInStorage } from '@/core/services/storage'

export const Create: FC = () => {
  const [loading, setLoading] = useState(false)
  const player_name_ref = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const createRoom = useCreateRoom()

  const handleCreateRoom = async () => {
    const player_name = player_name_ref.current.value
    setLoading(true)

    try {
      const room = await createRoom(player_name)

      saveRoomInStorage({
        room_id: room?.room_id,
        player: 'player_one',
        player_name
      })

      navigate(`/war/${room?.room_id}`)
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Fragment>
      <Reveal delay={0.25} className={revealWapper}>
        <Input label="Your name" ref={player_name_ref} />
      </Reveal>

      <Reveal delay={0.35} className={revealWapper}>
        <Button fullWidth disabled={loading} onClick={handleCreateRoom}>
          {loading ? 'Creating...' : 'Create'}
        </Button>
      </Reveal>
    </Fragment>
  )
}
