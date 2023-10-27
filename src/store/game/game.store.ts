import { create } from 'zustand'
import { GameModel, initialState } from './game.models'

export const useGameStore = create<GameModel>((set, get) => ({
  ...initialState,
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
      ...initialState
    })
  }
}))
