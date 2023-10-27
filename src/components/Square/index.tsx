import { FC, Fragment, ReactNode } from 'react'
import { css, cx } from '@styled/css'
import { Droppable } from 'react-beautiful-dnd'
import { Puppet } from '../Puppet'
import { useGameStore } from '@/store/game/game.store'

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
            className={cx(
              'square',
              css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                pos: 'relative',
                '&:not(:nth-child(-n + 3))': {
                  borderTop: '1vh solid #9245e4'
                },
                '&:nth-child(n+2):nth-child(-n+3), &:nth-child(n+5):nth-child(-n+6), &:nth-child(n+8):nth-child(-n+9) ':
                  {
                    borderLeft: '1vh solid #9245e4'
                  }
              })
            )}
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
