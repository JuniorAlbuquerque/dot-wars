import { useGameStore } from '@/store/game/game.store'
import { checkWinner } from '@/core/game/checkWinner'
import { initalBoard } from '@/utils/constants'
import { useCallback, useEffect } from 'react'
import { MovePuppet } from './types'
import {
  useUpdateDraw,
  useUpdateRoom,
  useUpdateWinner
} from '@/core/services/realtime'
import { checkIsDraw } from '../checkIsDraw'

export const useGame = (online: boolean = false) => {
  const updateSquare = useGameStore((state) => state.updateSquare)
  const updateWinner = useGameStore((state) => state.updateWinner)
  const updateDraw = useGameStore((state) => state.updateDraw)
  const current_player = useGameStore((state) => state.current_player)
  const player_one = useGameStore((state) => state.player_one)
  const player_two = useGameStore((state) => state.player_two)
  const current_room = useGameStore((state) => state.room_id)
  const squares = useGameStore((state) => state.squares)

  const updateRoom = useUpdateRoom()
  const updateWinnerDb = useUpdateWinner()
  const updateDrawDb = useUpdateDraw()

  const movePuppet = useCallback(
    async ({ puppet, square_id }: MovePuppet) => {
      const currentSquares = squares?.[square_id]
      const lastPuppetInSquare = currentSquares?.[currentSquares?.length - 1]

      if (!initalBoard?.includes(square_id)) {
        throw new Error('square destination is not recognized!')
      }

      if (current_player === puppet?.player_id) {
        throw new Error('player cannot play now!')
      }

      if (lastPuppetInSquare?.size >= puppet?.size) {
        throw new Error('puppet cannot be placed here!')
      }

      updateSquare(puppet, square_id)

      if (online) {
        await updateRoom(current_room, square_id, puppet)
      }
    },
    [current_player, squares, current_room]
  )

  useEffect(() => {
    const winner = checkWinner(squares)

    if (winner) {
      updateWinner(winner)

      if (online) {
        updateWinnerDb(current_room, winner)
      }
    }
  }, [squares])

  useEffect(() => {
    const isDraw = checkIsDraw(squares, [...player_one, ...player_two])

    if (isDraw) {
      updateDraw()

      if (online) {
        updateDrawDb(current_room)
      }
    }
  }, [squares, player_one?.length, player_two?.length])

  return {
    movePuppet,
    current_room,
    current_player
  }
}
