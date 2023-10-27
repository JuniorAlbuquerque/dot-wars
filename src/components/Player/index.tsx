import { FC } from 'react'
import { Puppet } from '../Puppet'
import { flex } from '@styled/patterns'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useGameStore } from '@/store/game/game.store'
import { Player as PlayerModel } from '@/store/game/game.models'

type PlayerProps = {
  player: PlayerModel
}

export const Player: FC<PlayerProps> = ({ player }) => {
  const puppets = useGameStore((state) => state[player])

  return (
    <Droppable droppableId={player} direction="horizontal">
      {(provided) => (
        <div
          ref={provided.innerRef}
          className={flex({ my: 8, alignItems: 'flex-end', zIndex: 1 })}
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
                  player={item.player_id}
                  ref={providedChild.innerRef}
                  {...providedChild.draggableProps}
                  {...providedChild.dragHandleProps}
                  style={providedChild.draggableProps.style}
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
