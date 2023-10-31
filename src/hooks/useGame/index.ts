import { useGameStore } from '@/store/game/game.store'
import { checkWinner } from '@/utils/checkWinner'
import { initalBoard } from '@/utils/constants'
import { useCallback, useEffect } from 'react'
import { MovePuppet } from './types'
import { useMutation } from 'convex/react'
import { api } from '@convex/_generated/api'
import { encryptStorage } from '@/utils/storage'

export const useGame = (online: boolean = false) => {
  const updateSquare = useGameStore((state) => state.updateSquare)
  const updateWinner = useGameStore((state) => state.updateWinner)
  const current_player = useGameStore((state) => state.current_player)
  const squares = useGameStore((state) => state.squares)

  const updateRoom = useMutation(api.rooms.updateRoom)
  const updateWinnerDb = useMutation(api.rooms.updateWinner)

  const movePuppet = useCallback(
    async ({ puppet, square_id }: MovePuppet) => {
      const currentSquares = squares?.[square_id]
      const lastPuppetInSquare = currentSquares?.[currentSquares?.length - 1]

      if (!initalBoard?.includes(square_id)) {
        throw new Error('square destination is not recognized!')
      }

      if (current_player === puppet?.player_id) {
        throw new Error('player cannot play now!')
      }

      if (lastPuppetInSquare?.size >= puppet?.size) {
        throw new Error('puppet cannot be placed here!')
      }

      updateSquare(puppet, square_id)

      if (online) {
        const room_id = encryptStorage.getItem('room')

        await updateRoom({
          room_id,
          square_id: square_id,
          puppet
        })
      }
    },
    [current_player, squares]
  )

  useEffect(() => {
    const room_id = encryptStorage.getItem('room')

    const winner = checkWinner(squares)

    if (winner) {
      updateWinner(winner)

      if (online) {
        updateWinnerDb({
          room_id,
          player_id: winner
        })
      }
    }
  }, [squares])

  return {
    movePuppet
  }
}
