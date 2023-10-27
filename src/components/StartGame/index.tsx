import useSound from 'use-sound'
import sunflower from '@/assets/sunflower.mp3'
import unlock from '@/assets/material_product_sounds/wav/primary/ui_unlock.wav'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from '../Logo'
import { useGameStore } from '@/store/game/game.store'
import { dropIn } from './variants'
import { flexWrapper, playButtonStyle, startGameOverlay } from './styles.css'

export const StartGame = () => {
  const [showStartGame, setShowStartGame] = useState(true)
  const winner = useGameStore((state) => state.winner)
  const resetGame = useGameStore((state) => state.resetGame)

  const [play, { sound }] = useSound(sunflower, {
    volume: 0.088
  })
  const [playClick] = useSound(unlock, {
    volume: 2
  })

  const handlePressPlayButton = () => {
    if (!winner) {
      play()
    }

    resetGame()
    setShowStartGame(false)
  }

  useEffect(() => {
    if (sound) {
      sound?.on('end', () => {
        play()
      })
    }
  }, [sound])

  useEffect(() => {
    if (winner) {
      setShowStartGame(true)
    }
  }, [winner])

  return (
    <AnimatePresence initial={true} mode="wait" onExitComplete={() => null}>
      {showStartGame && (
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={startGameOverlay}
        >
          <div className={flexWrapper.mdGap}>
            {!winner && <Logo />}

            {!!winner && (
              <div className={flexWrapper.base}>
                <Logo
                  text={`${winner?.split('_')[0]?.toUpperCase()} ${winner
                    ?.split('_')[1]
                    ?.toUpperCase()}`}
                />

                <Logo text={`WINS!`} />
              </div>
            )}

            <motion.button
              className={playButtonStyle}
              onMouseUp={() => handlePressPlayButton()}
              onMouseDown={() => {
                playClick()
              }}
            >
              {!winner ? 'PLAY' : 'PLAY AGAIN'}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
