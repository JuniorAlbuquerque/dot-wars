import { GameModel } from '@/models/Game.model'
import { generateSquares } from './generateSquares'

export const initalBoard = Array(9).fill(null)

export const initialGameState: Pick<
  GameModel,
  'squares' | 'current_player' | 'player_one' | 'player_two' | 'winner'
> = {
  player_one: generateSquares('player_one'),
  player_two: generateSquares('player_two')?.reverse(),
  squares: {},
  current_player: '',
  winner: null
}

export const squaresList = initalBoard.map((_, index) => index)

export const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
