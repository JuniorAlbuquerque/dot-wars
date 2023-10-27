import { FC, Fragment, ReactNode } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Puppet } from '../Puppet'
import { useGameStore } from '@/store/game/game.store'
import { clsx } from 'clsx'
import { squareContainer } from './styles.css'

type SquareProps = {
  squareId?: number
  children?: ReactNode
  onClick?: () => void
}

export const Square: FC<SquareProps> = ({ squareId }) => {
  const puppetsBySquare = useGameStore((state) => state.squares[squareId!])
  const lastPuppet = puppetsBySquare?.[puppetsBySquare?.length - 1] ?? null

  const getSquareStyle = (dragId: string) => {
    if (lastPuppet?.player_id === 'player_one') {
      return '#fad1b4'
    }

    if (lastPuppet?.player_id === 'player_two') {
      return '#ffb9dc'
    }

    if (dragId.includes('two')) {
      return '#ffb9dc'
    }

    return '#fad1b4'
  }

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
