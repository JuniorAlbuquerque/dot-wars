import { FC, ReactNode } from 'react'
import { css } from '@styled/css'
import { Droppable } from 'react-beautiful-dnd'

type SquareProps = {
  squareId?: string
  children?: ReactNode
  onClick?: () => void
}

export const Square: FC<SquareProps> = ({ squareId, children }) => {
  const getSquareStyle = (dragId: string) => {
    if (dragId.includes('pink')) {
      return 'rgba(249, 79, 164, 0.874)'
    }

    return '#fd7c1fc8'
  }

  return (
    <Droppable droppableId={squareId!}>
      {(provided, snapshot) => (
        <button
          ref={provided.innerRef}
          className={css({
            // bg: 'gray.200',
            rounded: 'lg',
            maxH: 'fit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pos: 'relative'
          })}
          style={{
            background: snapshot?.isDraggingOver
              ? getSquareStyle(snapshot.draggingOverWith!)
              : 'rgba(205, 215, 255, 0.456)'
          }}
        >
          {children}
        </button>
      )}
    </Droppable>
  )
}
