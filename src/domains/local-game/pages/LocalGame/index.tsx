import { Game } from '@/components/Game'
import { StartGame } from '@/components/StartGame'
import { Fragment } from 'react'

export const LocalGame = () => {
  return (
    <Fragment>
      <StartGame />
      <Game />
    </Fragment>
  )
}
