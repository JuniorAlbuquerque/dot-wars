import { PlayerModel } from './Player.model'

export type Puppet = {
  puppet_id: string
  player_id: PlayerModel
  size: number
}
