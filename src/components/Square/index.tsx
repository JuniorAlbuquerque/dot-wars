import { FC, Fragment, ReactNode, memo, useEffect } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Puppet } from '../Puppet'
import { useGameStore } from '@/store/game/game.store'
import { clsx } from 'clsx'
import { squareContainer } from './styles.css'
import { SquareKey } from '@/models/Game.model'
import { theme } from '@/styles/theme.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from 'use-sound'
import selectionSoundEnd from '@/assets/material_product_sounds/wav/hero/hero_simple-celebration-03.wav'
import { useControlStore } from '@/store/control/control.store'

type SquareProps = {
  squareId?: SquareKey
  children?: ReactNode
  onClick?: () => void
}

const playerColors = {
  player_one: theme.colors.primary_bg,
  player_two: theme.colors.secondary_bg
}

const defaultColor = theme.colors.primary_bg

const Square: FC<SquareProps> = ({ squareId }) => {
  const puppetsBySquare = useGameStore((state) => state.squares[squareId!])
  const lastPuppet = puppetsBySquare?.[puppetsBySquare?.length - 1] ?? null
  const effectVolume = useControlStore((state) => state.effectsVolume)

  const [playDragEnd] = useSound(selectionSoundEnd, {
    volume: effectVolume - 0.25
  })

  const getSquareStyle = (dragId: string) => {
    const lastPlayerId = lastPuppet?.player_id
    const color = lastPlayerId ? playerColors[lastPlayerId] : defaultColor
    return dragId?.includes('two') ? playerColors.player_two : color
  }

  useEffect(() => {
    if (puppetsBySquare?.length > 0) {
      playDragEnd()
    }
  }, [puppetsBySquare?.length])

  return (
    <Droppable droppableId={squareId?.toString()}>
      {(provided, snapshot) => (
        <Fragment>
          <button
            ref={provided.innerRef}
            className={clsx('square', squareContainer)}
            style={{
              background:
                snapshot?.isDraggingOver || !!lastPuppet
                  ? getSquareStyle(snapshot.draggingOverWith!)
                  : 'rgba(205, 215, 255, 0.02)'
            }}
          >
            {!!lastPuppet && (
              <Puppet
                key={lastPuppet?.puppet_id}
                player={lastPuppet?.player_id}
                size={lastPuppet?.size}
                withoutMargin
              />
            )}
            {provided.placeholder}
          </button>
        </Fragment>
      )}
    </Droppable>
  )
}

export default memo(Square)
