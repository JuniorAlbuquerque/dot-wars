import { create } from 'zustand'
import { initialGameState } from '@/utils/constants'
import { GameModel } from '@/models/Game.model'

export const useGameStore = create<GameModel>((set, get) => ({
  ...initialGameState,
  player_names: {
    player_one: '',
    player_two: ''
  },
  updateSquare(puppet, square_id) {
    const currentSquares = get().squares[square_id] ?? []

    set((get) => ({
      current_player: puppet?.player_id,
      squares: {
        ...get.squares,
        [square_id]: [...currentSquares, puppet]
      },
      [puppet?.player_id]: get[puppet.player_id]?.filter(
        (pup) => pup.puppet_id !== puppet.puppet_id
      )
    }))
  },
  updateWinner(winner) {
    set({
      winner
    })
  },
  resetGame() {
    set({
      ...initialGameState
    })
  }
}))
