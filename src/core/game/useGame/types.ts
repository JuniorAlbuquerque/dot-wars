import { SquareKey } from '@/models/Game.model'
import { Puppet } from '@/models/Puppet.model'

export type MovePuppet = {
  puppet: Puppet
  square_id: SquareKey
}
