// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from 'use-sound'
import unlock from '@/assets/material_product_sounds/wav/primary/ui_unlock.wav'
import { FC, Fragment, useEffect, useMemo, useState } from 'react'
import Logo from '../Logo'
import { useGameStore } from '@/store/game/game.store'
import {
  PlayerStyle,
  drawWrapper,
  flexWrapper,
  modalWrapper,
  playerNameStyle,
  puppetsWrapper
} from './styles.css'
import { Modal } from '../Modal'
import { Button } from '../Button'
import { useRestartGame } from '@/core/services/realtime'
import { Input } from '../Input'
import { Reveal } from '../Reveal'
import { useCopyToClipboard } from '@/utils/useCopyToClipboard'
import { getRoomFromStorage } from '@/core/services/storage'
import { PuppetIcon } from '../PuppetIcon'

type StartGameProps = {
  online?: boolean
}

export const StartGame: FC<StartGameProps> = ({ online }) => {
  const [showStartGame, setShowStartGame] = useState(true)
  const winner = useGameStore((state) => state.winner)
  const isDraw = useGameStore((state) => state.draw)
  const player_names = useGameStore((state) => state.player_names)
  const room_id = useGameStore((state) => state?.room_id)
  const resetGame = useGameStore((state) => state.resetGame)

  const restartOnlineGame = useRestartGame()

  const [copiedText, copy] = useCopyToClipboard()

  const current_player_name = useMemo(() => {
    const player_name = getRoomFromStorage(room_id)?.player_name

    return player_name || ''
  }, [])

  const current_player = useMemo(() => {
    const player = getRoomFromStorage(room_id)?.player
    return player || ''
  }, [])

  const winnerName = useMemo(() => {
    if (player_names[winner] && online) {
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
    if (online && (winner || isDraw)) {
      await restartOnlineGame(room_id, winner)
    }

    if (winner || isDraw) {
      resetGame()
    }

    setShowStartGame(false)
  }

  useEffect(() => {
    if (winner) {
      setShowStartGame(true)
    }
  }, [winner])

  useEffect(() => {
    if (isDraw) {
      setShowStartGame(true)
    }
  }, [isDraw])

  return (
    <Modal open={showStartGame}>
      <div className={modalWrapper}>
        {!winner && !isDraw && <Logo />}

        <div className={flexWrapper.mdGap}>
          {isDraw ? (
            <div className={drawWrapper}>
              <h1>Oh no, is draw!</h1>

              <div className={puppetsWrapper}>
                <PuppetIcon color="secondary" />
                <PuppetIcon color="primary" />
              </div>
            </div>
          ) : (
            <Fragment>
              {!!current_player_name && !winner && online && (
                <div className={playerNameStyle[current_player as PlayerStyle]}>
                  Welcome, {current_player_name}
                </div>
              )}

              {!!winner && (
                <div className={flexWrapper.base}>
                  <Logo text={winnerName} />

                  <Logo text={`WINS!`} />
                </div>
              )}

              {online && !winner && (
                <Fragment>
                  <Reveal delay={0.25}>
                    <Input value={room_id} label="Room Id" readOnly />
                  </Reveal>

                  <Button
                    fullWidth
                    onMouseDown={() => {
                      playClick()
                    }}
                    onClick={() => copy(room_id)}
                  >
                    {copiedText ? 'COPIED' : 'COPY ROOM ID'}
                  </Button>
                </Fragment>
              )}
            </Fragment>
          )}

          <Button
            onMouseUp={handlePressPlayButton}
            fullWidth
            onMouseDown={() => {
              playClick()
            }}
          >
            {!winner && !isDraw ? 'PLAY' : 'PLAY AGAIN'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
