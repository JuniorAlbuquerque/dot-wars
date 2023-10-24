import { css } from '../styled-system/css'
import { grid } from '../styled-system/patterns'
import { Square } from './components/Square'
import { Player } from './components/Player'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div
        className={css({
          layerStyle: 'container',
          height: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'url(bg.webp) rgba(1, 11, 51, 0.539)',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <Player color="pink" />

        <div
          className={grid({
            columns: 3,
            w: 480,
            h: 480,
            bg: 'rgba(46, 1, 51, 0.277)',
            rounded: 'lg',
            overflow: 'hidden',
            gap: 2,
            p: 2
          })}
        >
          <Square squareId="1" />
          <Square squareId="2" />
          <Square squareId="3" />
          <Square squareId="4" />
          <Square squareId="5" />
          <Square squareId="6" />
          <Square squareId="7" />
          <Square squareId="8" />
          <Square squareId="9" />
        </div>

        <Player color="orange" />
      </div>
    </DragDropContext>
  )
}

export default App
