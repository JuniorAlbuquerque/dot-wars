import { FC, Fragment } from 'react'
import { Game } from '@/components/Game'
import { StartGame } from '@/components/StartGame'

export const OnlineGame: FC = () => {
  return (
    <Fragment>
      <Game online />

      <StartGame />
    </Fragment>
  )
}
