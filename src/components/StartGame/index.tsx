import { css } from '@styled/css'
import useSound from 'use-sound'
import sunflower from '@/assets/sunflower.mp3'
import unlock from '@/assets/material_product_sounds/wav/primary/ui_unlock.wav'
import { flex } from '@styled/patterns'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { style } from './styles'
import Logo from '../Logo'
import { useGameStore } from '@/store/game/game.store'

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '100vh',
    opacity: 0
  }
}

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
          className={css({
            bg: '#4e074fb7',
            pos: 'absolute',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            zIndex: 10,
            w: '100%'
          })}
        >
          <div
            className={flex({
              direction: 'column',
              gap: 8,
              alignItems: 'center'
            })}
          >
            {!winner && <Logo />}

            {!!winner && (
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                })}
              >
                <Logo
                  text={`${winner?.split('_')[0]?.toUpperCase()} ${winner
                    ?.split('_')[1]
                    ?.toUpperCase()}`}
                />

                <Logo text={`WINS!`} />
              </div>
            )}

            <motion.button
              className={style}
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
