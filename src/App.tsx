import { Fragment } from 'react'
import { Game } from './components/Game'
import { StartGame } from './components/StartGame'

function App() {
  return (
    <Fragment>
      <Game />

      <StartGame />
    </Fragment>
  )
}

export default App
