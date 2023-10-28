import { PlayerModel } from '../models/Player.model'
import { Puppet } from '../models/Puppet.model'

export const generateSquares = (color: PlayerModel): Puppet[] => {
  return Array.from({ length: 9 }).map((_, index) => {
    const size = index * 10 + 10

    return {
      puppet_id: `${index}-${color}-${size}`,
      size: index * 10 + 10,
      player_id: color
    }
  })
}
