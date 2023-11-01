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

const getLastValues = (squares: SquareFill) => {
  const lastValues: Puppet[] = []

  for (const key in squares) {
    const currentSquare = squares[key as keyof SquareFill]
    if (currentSquare.length > 0) {
      lastValues.push(currentSquare[currentSquare.length - 1])
    }
  }

  return lastValues
}

export const checkIsDraw = (squares: SquareFill, puppets_players: Puppet[]) => {
  const mappedSquares: MappedSquare = {}

  for (const key in squares) {
    const currentKey = key.split('_')[1]

    if (!mappedSquares[currentKey]) {
      mappedSquares[currentKey] = squares[key as keyof SquareFill]
    }
  }

  const allFilled = Object.values(mappedSquares)?.every(
    (square) => square?.length > 0
  )

  if (allFilled) {
    const lastValues = getLastValues(squares)

    const lastValuesPlayerIds = lastValues?.map((value) => value?.size)

    const isDraw = puppets_players?.every(
      (puppet) => lastValuesPlayerIds?.every((size) => size >= puppet?.size)
    )

    return isDraw
  }

  return false
}
