import { Id } from '@convex/_generated/dataModel'
import { PlayerModel } from './Player.model'
import { Puppet } from './Puppet.model'

export const squareKeys = [
  'square_0',
  'square_1',
  'square_2',
  'square_3',
  'square_4',
  'square_5',
  'square_6',
  'square_7',
  'square_8'
] as const

export type SquareKey = (typeof squareKeys)[number]

export type SquareFill = {
  [key in SquareKey]: Puppet[]
}

export type GameModel = {
  squares: SquareFill
  current_player: string
  player_one: Puppet[]
  player_two: Puppet[]
  player_names: {
    player_one: string
    player_two?: string
  }
  winner: PlayerModel
  draw?: boolean
  room_id?: Id<'rooms'>
  updateSquare(puppet: Puppet, square_id: SquareKey): void
  updateWinner(winner: PlayerModel): void
  updateDraw(): void
  resetGame(): void
}
