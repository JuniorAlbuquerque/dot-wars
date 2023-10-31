// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from 'use-sound'
// import sunflower from '@/assets/sunflower.mp3'
import unlock from '@/assets/material_product_sounds/wav/primary/ui_unlock.wav'
import { FC, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '../Logo'
import { useGameStore } from '@/store/game/game.store'
import { dropIn } from './variants'
import { flexWrapper, playButtonStyle, startGameOverlay } from './styles.css'
import { createPortal } from 'react-dom'
import { useMutation } from 'convex/react'
import { api } from '@convex/_generated/api'

const startGameRoot = document.getElementById('start-game-root') as HTMLElement

type StartGameProps = {
  online?: boolean
}

export const StartGame: FC<StartGameProps> = ({ online }) => {
  const [showStartGame, setShowStartGame] = useState(true)
  const winner = useGameStore((state) => state.winner)
  const player_names = useGameStore((state) => state.player_names)
  const room_id = useGameStore((state) => state?.room_id)
  const resetGame = useGameStore((state) => state.resetGame)

  const restartOnlineGame = useMutation(api.rooms.restartRoom)

  const winnerName = useMemo(() => {
    if (player_names[winner]) {
      return player_names[winner]
    }

    return `${winner?.split('_')[0]?.toUpperCase()} ${winner
      ?.split('_')[1]
      ?.toUpperCase()}`
  }, [player_names, winner])

  // const [play, { sound }] = useSound(sunflower, {
  //   volume: 0.088
  // })
  const [playClick] = useSound(unlock, {
    volume: 2
  })

  const handlePressPlayButton = async () => {
    if (online && winner) {
      await restartOnlineGame({
        room_id
      })
    }

    if (winner) {
      resetGame()
    }

    // resetGame()
    setShowStartGame(false)
  }

  // useEffect(() => {
  //   if (sound) {
  //     sound?.on('end', () => {
  //       play()
  //     })
  //   }
  // }, [sound])

  useEffect(() => {
    if (winner) {
      setShowStartGame(true)
    }
  }, [winner])

  return createPortal(
    <AnimatePresence initial={true} mode="wait" onExitComplete={() => null}>
      {showStartGame && (
        <motion.div
          variants={dropIn}
          initial="hidden"
          layoutScroll={false}
          animate="visible"
          exit="exit"
          className={startGameOverlay}
        >
          <div className={flexWrapper.mdGap}>
            {!winner && <Logo />}

            {!!winner && (
              <div className={flexWrapper.base}>
                <Logo text={winnerName} />

                <Logo text={`WINS!`} />
              </div>
            )}

            <motion.button
              className={playButtonStyle}
              onMouseUp={handlePressPlayButton}
              onMouseDown={() => {
                playClick()
              }}
            >
              {!winner ? 'PLAY' : 'PLAY AGAIN'}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    startGameRoot
  )
}
