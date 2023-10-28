import { useGameStore } from '@/store/game/game.store'
import { checkWinner } from '@/utils/checkWinner'
import { squaresList } from '@/utils/constants'
import { useCallback, useEffect } from 'react'
import { MovePuppet } from './types'

export const useGame = () => {
  const updateSquare = useGameStore((state) => state.updateSquare)
  const updateWinner = useGameStore((state) => state.updateWinner)
  const current_player = useGameStore((state) => state.current_player)
  const squares = useGameStore((state) => state.squares)

  const movePuppet = useCallback(
    ({ puppet, square_id }: MovePuppet) => {
      const currentSquaares = squares?.[square_id]
      const lastPuppetInSquare = currentSquaares?.[currentSquaares?.length - 1]

      if (!squaresList?.includes(Number(square_id))) {
        throw new Error('square destination is not recognized!')
      }

      if (current_player === puppet?.player_id) {
        throw new Error('player cannot play now!')
      }

      if (lastPuppetInSquare?.size >= puppet?.size) {
        throw new Error('puppet cannot be placed here!')
      }

      updateSquare(puppet, square_id)
    },
    [current_player, squares]
  )

  useEffect(() => {
    const winner = checkWinner(squares)

    if (winner) {
      updateWinner(winner)
    }
  }, [squares])

  return {
    movePuppet
  }
}
