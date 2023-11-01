import { GameModel, squareKeys } from '@/models/Game.model'
import { generateSquares } from './generateSquares'

export const initalBoard = squareKeys

export const initialGameState: Pick<
  GameModel,
  'squares' | 'player_one' | 'player_two' | 'winner'
> = {
  player_one: generateSquares('player_one'),
  player_two: generateSquares('player_two'),
  squares: {
    square_0: [],
    square_1: [],
    square_2: [],
    square_3: [],
    square_4: [],
    square_5: [],
    square_6: [],
    square_7: [],
    square_8: []
  },
  winner: null
}

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
