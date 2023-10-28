import { PlayerModel } from '@/models/Player.model'
import { HTMLAttributes } from 'react'

export type PuppetProps = HTMLAttributes<HTMLDivElement> & {
  size: number
  player: PlayerModel
  withoutMargin?: boolean
}
