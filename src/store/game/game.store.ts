import { create } from 'zustand'
import { GameModel } from './game.models'

export const useGameStore = create<GameModel>((set) => ({
  squares: {},
  updateSquare(puppet, square_id) {
    set((get) => ({
      squares: {
        [square_id]: [...get.squares[square_id], puppet]
      }
    }))
  }
}))
