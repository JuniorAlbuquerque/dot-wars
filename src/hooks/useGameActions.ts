import { Puppet, SquareFill, initalBoard } from '@/store/game/game.models'
import { useGameStore } from '@/store/game/game.store'
import { useCallback, useEffect } from 'react'

type MovePuppet = {
  puppet: Puppet
  square_id: number
}

const checkWinner = (squares: SquareFill) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < winningCombinations?.length; i++) {
    const [a, b, c] = winningCombinations[i]

    const lastA = squares[a]?.[squares[a]?.length - 1]
    const lastB = squares[b]?.[squares[b]?.length - 1]
    const lastC = squares[c]?.[squares[c]?.length - 1]

    if (
      squares[a] &&
      lastA?.player_id === lastB?.player_id &&
      lastA?.player_id === lastC?.player_id
    ) {
      return lastA?.player_id
    }
  }

  return null
}

const squaresList = initalBoard.map((_, index) => index)

export const useGameActions = () => {
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
