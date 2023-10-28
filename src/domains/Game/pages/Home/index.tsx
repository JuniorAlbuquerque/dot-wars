import { Game } from '@/components/Game'
import { StartGame } from '@/components/StartGame'
import { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
      <StartGame />
      <Game />
    </Fragment>
  )
}
