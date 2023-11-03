import { PlayerModel } from '@/models/Player.model'

export type PlayerProps = {
  player: PlayerModel
  disabled?: boolean
  isTurn?: boolean
  subscriber?: boolean
  online?: boolean
}
