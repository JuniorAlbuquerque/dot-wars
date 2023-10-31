import { SquareFill } from '@/models/Game.model'
import { winningCombinations } from '../constants'
import { Puppet } from '@/models/Puppet.model'

type MappedSquare = {
  [key: string]: Puppet[]
}

export const checkWinner = (squares: SquareFill) => {
  const mappedSquares: MappedSquare = {}

  for (const key in squares) {
    const currentKey = key.split('_')[1]

    if (!mappedSquares[currentKey]) {
      mappedSquares[currentKey] = squares[key as keyof SquareFill]
    }
  }

  for (let i = 0; i < winningCombinations?.length; i++) {
    const [a, b, c] = winningCombinations[i]

    const lastA = mappedSquares[a]?.[mappedSquares[a]?.length - 1]
    const lastB = mappedSquares[b]?.[mappedSquares[b]?.length - 1]
    const lastC = mappedSquares[c]?.[mappedSquares[c]?.length - 1]

    if (
      mappedSquares?.[a]?.length > 0 &&
      lastA?.player_id === lastB?.player_id &&
      lastA?.player_id === lastC?.player_id
    ) {
      return lastA?.player_id
    }
  }

  return null
}
