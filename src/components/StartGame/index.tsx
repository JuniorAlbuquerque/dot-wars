// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from 'use-sound'
import unlock from '@/assets/material_product_sounds/wav/primary/ui_unlock.wav'
import { FC, useEffect, useMemo, useState } from 'react'
import Logo from '../Logo'
import { useGameStore } from '@/store/game/game.store'
import { flexWrapper } from './styles.css'
import { Modal } from '../Modal'
import { Button } from '../Button'
import { useRestartGame } from '@/core/services/realtime'

type StartGameProps = {
  online?: boolean
}

export const StartGame: FC<StartGameProps> = ({ online }) => {
  const [showStartGame, setShowStartGame] = useState(true)
  const winner = useGameStore((state) => state.winner)
  const player_names = useGameStore((state) => state.player_names)
  const room_id = useGameStore((state) => state?.room_id)
  const resetGame = useGameStore((state) => state.resetGame)

  const restartOnlineGame = useRestartGame()

  const winnerName = useMemo(() => {
    if (player_names[winner]) {
      return player_names[winner]
    }

    return `${winner?.split('_')[0]?.toUpperCase()} ${winner
      ?.split('_')[1]
      ?.toUpperCase()}`
  }, [player_names, winner])

  const [playClick] = useSound(unlock, {
    volume: 2
  })

  const handlePressPlayButton = async () => {
    if (online && winner) {
      await restartOnlineGame(room_id, winner)
    }

    if (winner) {
      resetGame()
    }

    setShowStartGame(false)
  }

  useEffect(() => {
    if (winner) {
      setShowStartGame(true)
    }
  }, [winner])

  return (
    <Modal open={showStartGame}>
      <div className={flexWrapper.mdGap}>
        {!winner && <Logo />}

        {!!winner && (
          <div className={flexWrapper.base}>
            <Logo text={winnerName} />

            <Logo text={`WINS!`} />
          </div>
        )}

        <Button
          onMouseUp={handlePressPlayButton}
          onMouseDown={() => {
            playClick()
          }}
        >
          {!winner ? 'PLAY' : 'PLAY AGAIN'}
        </Button>
      </div>
    </Modal>
  )
}
