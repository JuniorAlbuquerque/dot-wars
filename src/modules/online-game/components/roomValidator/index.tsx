import { GameContainer } from '@/components/GameContainer'
import { api } from '@convex/_generated/api'
import { Id } from '@convex/_generated/dataModel'
import { useQuery } from 'convex/react'
import { FC, Fragment, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { loader, loadingRoomContainer } from './styles.css'
import { useGameStore } from '@/store/game/game.store'

type OnlineGameParams = {
  room_id: string
}

export const RoomValidator: FC = () => {
  const { room_id } = useParams<OnlineGameParams>()
  const [existRoom, setExistsRoom] = useState(false)

  const gameStore = useGameStore.setState

  const currentRoom = useQuery(api.rooms.getRoom, {
    room_id: room_id as Id<'rooms'>
  })

  useEffect(() => {
    if (currentRoom?._id) {
      setExistsRoom(true)

      gameStore({
        current_player: currentRoom?.current_player,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        player_one: currentRoom?.player_one as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        player_two: currentRoom?.player_two as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        squares: currentRoom?.board as any,
        room_id: currentRoom?._id,
        player_names: {
          player_one: currentRoom?.player_names?.player_one,
          player_two: currentRoom?.player_names?.player_two
        }
      })
    }
  }, [currentRoom])

  return (
    <Fragment>
      {!existRoom && (
        <GameContainer>
          <div className={loadingRoomContainer}>
            <h1>Checking room</h1>

            <div className={loader}></div>
          </div>
        </GameContainer>
      )}

      {existRoom && <Outlet />}
    </Fragment>
  )
}
