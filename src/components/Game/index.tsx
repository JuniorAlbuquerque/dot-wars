import { DragDropContext, type DropResult } from 'react-beautiful-dnd'
import useSound from 'use-sound'
import selectionSound from '@/assets/material_product_sounds/wav/primary/navigation_forward-selection-minimal.wav'
import simpleSoundEnd from '@/assets/material_product_sounds/wav/primary/navigation_backward-selection-minimal.wav'
import selectionSoundEnd from '@/assets/material_product_sounds/wav/hero/hero_simple-celebration-03.wav'
import { grid } from '@styled/patterns'
import { Player } from '../Player'
import { Square } from '../Square'
import { css, cx } from '@styled/css'
import { Player as PlayerModel, initalBoard } from '@/store/game/game.models'
import { useGameActions } from '@/hooks/useGameActions'

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

  const { movePuppet } = useGameActions()

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
        square_id: Number(destination?.droppableId)
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
      <div
        className={css({
          layerStyle: 'container',
          height: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'url(bg.webp) rgba(1, 11, 51, 0.539)',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <Player player="player_two" />

        <div
          className={cx(
            grid({
              columns: 3,
              w: 480,
              h: 480,
              bg: 'rgba(46, 1, 51, 0.104)',
              rounded: 'lg',
              overflow: 'hidden',
              gap: 0,
              p: 2,
              gridAutoRows: 'minmax(140px , auto)'
            })
          )}
        >
          {initalBoard?.map((_, index) => (
            <Square key={index} squareId={index} />
          ))}
        </div>

        <Player player="player_one" />
      </div>
    </DragDropContext>
  )
}
