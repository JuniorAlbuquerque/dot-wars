import { SquareFill } from '@/models/Game.model'
import { Puppet } from '@/models/Puppet.model'
import { MappedSquare } from '../checkWinner'

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
