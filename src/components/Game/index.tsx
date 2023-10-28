import { DragDropContext, type DropResult } from 'react-beautiful-dnd'
import useSound from 'use-sound'
import selectionSound from '@/assets/material_product_sounds/wav/primary/navigation_forward-selection-minimal.wav'
import simpleSoundEnd from '@/assets/material_product_sounds/wav/primary/navigation_backward-selection-minimal.wav'
import selectionSoundEnd from '@/assets/material_product_sounds/wav/hero/hero_simple-celebration-03.wav'
import { Player } from '../Player'
import { Square } from '../Square'
import { gameBoard, gameContainer } from './styles.css'
import { useGame } from '@/hooks/useGame'
import { PlayerModel } from '@/models/Player.model'
import { initalBoard } from '@/utils/constants'
import { SquareKey } from '@/models/Game.model'

export const Game = () => {
  const [playDragStart] = useSound(selectionSound, {
    volume: 2.5
  })
  const [playDragEnd] = useSound(selectionSoundEnd, {
    volume: 1
  })
  const [playSimpleDragEnd] = useSound(simpleSoundEnd, {
    volume: 2.2
  })

  const { movePuppet } = useGame()

  const handleDragEnd = (result: DropResult) => {
    const destination = result?.destination
    const splittedDraggableItem = result.draggableId!.split('-')
    const [, player, size] = splittedDraggableItem

    try {
      movePuppet({
        puppet: {
          puppet_id: result?.draggableId,
          player_id: player as PlayerModel,
          size: Number(size)
        },
        square_id: destination?.droppableId as SquareKey
      })

      playDragEnd()
    } catch (error) {
      playSimpleDragEnd()

      if (error instanceof Error) {
        console.warn(error?.message)
      }
    }
  }

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
      onDragStart={() => {
        playDragStart()
      }}
    >
      <div className={gameContainer}>
        <Player player="player_two" />

        <div className={gameBoard}>
          {initalBoard?.map((square, index) => (
            <Square key={index} squareId={square} />
          ))}
        </div>

        <Player player="player_one" />
      </div>
    </DragDropContext>
  )
}
