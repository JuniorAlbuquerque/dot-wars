import { SquareFill } from '@/models/Game.model'
import { winningCombinations } from './constants'

export const checkWinner = (squares: SquareFill) => {
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
