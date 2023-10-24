export type Puppet = {
  puppet_id: string
  player_id: string
  size: number
}

export type SquareFill = Record<string, Puppet[]>

export type GameModel = {
  squares: SquareFill
  updateSquare(puppet: Puppet, square_id: string): void
}
