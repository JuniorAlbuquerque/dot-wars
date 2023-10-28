import { PlayerModel } from './Player.model'
import { Puppet } from './Puppet.model'

export type SquareFill = Record<number, Puppet[]>

export type GameModel = {
  squares: SquareFill
  current_player: string
  player_one: Puppet[]
  player_two: Puppet[]
  winner: PlayerModel
  updateSquare(puppet: Puppet, square_id: number): void
  updateWinner(winner: PlayerModel): void
  resetGame(): void
}
