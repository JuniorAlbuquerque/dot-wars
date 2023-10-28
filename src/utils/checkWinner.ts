import { SquareFill } from '@/models/Game.model'
import { winningCombinations } from './constants'
import { Puppet } from '@/models/Puppet.model'

type MappedSquare = {
  [key: string]: Puppet[]
}

export const checkWinner = (squares: SquareFill) => {
  const mappedSquares = Object.entries(squares)?.reduce((acc, current) => {
    const [key, value] = current

    const currentKey = key.split('_')[1]

    if (!acc[currentKey]) {
      acc[currentKey] = value
    }

    return acc
  }, {} as MappedSquare)

  for (let i = 0; i < winningCombinations?.length; i++) {
    const [a, b, c] = winningCombinations[i]

    const lastA = mappedSquares[a]?.[mappedSquares[a]?.length - 1]
    const lastB = mappedSquares[b]?.[mappedSquares[b]?.length - 1]
    const lastC = mappedSquares[c]?.[mappedSquares[c]?.length - 1]

    if (
      mappedSquares[a] &&
      lastA?.player_id === lastB?.player_id &&
      lastA?.player_id === lastC?.player_id
    ) {
      return lastA?.player_id
    }
  }

  return null
}
