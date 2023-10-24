import { FC, useMemo } from 'react'
import { Puppet } from '../Puppet'
import { flex } from '@styled/patterns'
import { Draggable, Droppable } from 'react-beautiful-dnd'

type PlayerProps = {
  color: 'orange' | 'pink'
}

export const Player: FC<PlayerProps> = ({ color }) => {
  const puppets = useMemo(() => {
    const arr = Array.from({ length: 9 }).map((_, index) => ({
      puppet_id: `${index}-${color}`,
      size: index * 10 + 10,
      playerd_id: color
    }))

    return arr
  }, [])

  return (
    <Droppable isDropDisabled droppableId={color} direction="horizontal">
      {(provided) => (
        <div
          ref={provided.innerRef}
          className={flex({ gap: 2, my: 8, alignItems: 'baseline' })}
          {...provided.droppableProps}
        >
          {puppets?.map((item, index) => (
            <Draggable
              key={item.puppet_id}
              index={index}
              draggableId={item.puppet_id}
            >
              {(providedChild) => (
                <Puppet
                  size={item.size}
                  color={item.playerd_id}
                  style={providedChild.draggableProps.style}
                  ref={providedChild.innerRef}
                  {...providedChild.draggableProps}
                  {...providedChild.dragHandleProps}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
