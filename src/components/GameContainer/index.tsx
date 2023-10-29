import { FC, ReactNode } from 'react'
import { gameContainer, gameGap } from './styles.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'

type GameContainerProps = {
  children: ReactNode
  gap?: number
}

export const GameContainer: FC<GameContainerProps> = ({
  children,
  gap = 0
}) => {
  return (
    <div
      className={gameContainer}
      style={assignInlineVars({
        [gameGap]: `${gap}px`
      })}
    >
      {children}
    </div>
  )
}
