export type Player = 'player_one' | 'player_two'

export type Puppet = {
  puppet_id: string
  player_id: Player
  size: number
}

export type SquareFill = Record<number, Puppet[]>

export type GameModel = {
  squares: SquareFill
  current_player: string
  player_one: Puppet[]
  player_two: Puppet[]
  winner: Player
  updateSquare(puppet: Puppet, square_id: number): void
  updateWinner(winner: Player): void
  resetGame(): void
}

export const initalBoard = Array(9).fill(null)

const generateSquares = (color: Player): Puppet[] => {
  return Array.from({ length: 9 }).map((_, index) => {
    const size = index * 10 + 10

    return {
      puppet_id: `${index}-${color}-${size}`,
      size: index * 10 + 10,
      player_id: color
    }
  })
}

export const initialState: Pick<
  GameModel,
  'squares' | 'current_player' | 'player_one' | 'player_two' | 'winner'
> = {
  player_one: generateSquares('player_one'),
  player_two: generateSquares('player_two')?.reverse(),
  squares: {},
  current_player: '',
  winner: null
}
