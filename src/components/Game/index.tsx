import { DragDropContext, type DropResult } from 'react-beautiful-dnd'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from 'use-sound'
import selectionSound from '@/assets/material_product_sounds/wav/primary/navigation_forward-selection-minimal.wav'
import simpleSoundEnd from '@/assets/material_product_sounds/wav/primary/navigation_backward-selection-minimal.wav'
import { Player } from '../Player'
import Square from '../Square'
import { gameBoard } from './styles.css'
import { useGame } from '@/core/game/useGame'
import { PlayerModel } from '@/models/Player.model'
import { initalBoard } from '@/utils/constants'
import { SquareKey } from '@/models/Game.model'
import { GameContainer } from '../GameContainer'
import { FC, useEffect, useState } from 'react'
import { getRoomFromStorage } from '@/core/services/storage'
import { useControlStore } from '@/store/control/control.store'

type GameProps = {
  online?: boolean
}

export const Game: FC<GameProps> = ({ online = false }) => {
  const effectVolume = useControlStore((state) => state.effectsVolume)

  const [playDragStart] = useSound(selectionSound, {
    volume: effectVolume
  })
  const [playSimpleDragEnd] = useSound(simpleSoundEnd, {
    volume: effectVolume
  })

  const [publisherPlayer, setPublisherPlayer] =
    useState<PlayerModel>('player_one')
  const [subscriberPlayer, setSubscriberPlayer] =
    useState<PlayerModel>('player_two')

  const { movePuppet, current_room, current_player } = useGame(online)

  const handleDragEnd = async (result: DropResult) => {
    const destination = result?.destination
    const splittedDraggableItem = result.draggableId!.split('-')
    const [, player, size] = splittedDraggableItem

    try {
      await movePuppet({
        puppet: {
          puppet_id: result?.draggableId,
          player_id: player as PlayerModel,
          size: Number(size)
        },
        square_id: destination?.droppableId as SquareKey
      })
    } catch (error) {
      playSimpleDragEnd()

      if (error instanceof Error) {
        console.warn(error?.message)
      }
    }
  }

  useEffect(() => {
    if (online) {
      const room = getRoomFromStorage(current_room)
      const current_player = room?.player as PlayerModel

      setPublisherPlayer(current_player)

      if (current_player === 'player_one') {
        setSubscriberPlayer('player_two')
        return
      }

      setSubscriberPlayer('player_one')
    }
  }, [current_room])

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
      onDragStart={() => {
        playDragStart()
      }}
    >
      <GameContainer>
        <Player
          player={subscriberPlayer}
          disabled={online}
          isTurn={current_player !== subscriberPlayer}
          subscriber
          online={online}
        />

        <div className={gameBoard}>
          {initalBoard?.map((square, index) => (
            <Square key={index} squareId={square} />
          ))}
        </div>

        <Player
          player={publisherPlayer}
          isTurn={current_player !== publisherPlayer}
          online={online}
        />
      </GameContainer>
    </DragDropContext>
  )
}
