import { Game } from '@/components/Game'
import { StartGame } from '@/components/StartGame'
import { Fragment } from 'react'

const LocalGame = () => {
  return (
    <Fragment>
      <StartGame />
      <Game />
    </Fragment>
  )
}

export default LocalGame
