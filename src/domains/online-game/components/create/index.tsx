import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Reveal } from '@/components/Reveal'
import { FC, Fragment, useRef, useState } from 'react'
import { revealWapper } from '../../pages/CreateRoom/styles.css'
import { useMutation } from 'convex/react'
import { api } from '@convex/_generated/api'
import { encryptStorage } from '@/utils/storage'
import { useNavigate } from 'react-router-dom'

export const Create: FC = () => {
  const [loading, setLoading] = useState(false)
  const player_name_ref = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()
  const createRoom = useMutation(api.rooms.createRoom)

  const handleCreateRoom = async () => {
    const player_name = player_name_ref.current.value
    setLoading(true)

    try {
      const room = await createRoom({
        player_name
      })

      encryptStorage.setItem('room', room?.room_id)
      encryptStorage.setItem('player', room?.player)

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
