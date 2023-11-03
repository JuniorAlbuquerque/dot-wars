import { Puppet } from '@/models/Puppet.model'
import { api } from '@convex/_generated/api'
import { Id } from '@convex/_generated/dataModel'
import { useMutation, useQuery } from 'convex/react'

export const useGetRoom = (room_id: string) => {
  const currentRoom = useQuery(api.rooms.getRoom, {
    room_id: room_id as Id<'rooms'>
  })

  return currentRoom
}

export const useRestartGame = () => {
  const restartOnlineGame = useMutation(api.rooms.restartRoom)

  const restartGame = async (room_id: string, winner: string) => {
    return await restartOnlineGame({
      room_id: room_id as Id<'rooms'>,
      winner: winner ? winner : undefined
    })
  }

  return restartGame
}

export const useUpdateWinner = () => {
  const updateWinner = useMutation(api.rooms.updateWinner)

  const updateWinnerDb = async (room_id: string, winner: string) => {
    return await updateWinner({
      room_id: room_id as Id<'rooms'>,
      player_id: winner
    })
  }

  return updateWinnerDb
}

export const useUpdateDraw = () => {
  const updateDraw = useMutation(api.rooms.updateDraw)

  const updateDrawDb = async (room_id: string) => {
    return await updateDraw({
      room_id: room_id as Id<'rooms'>
    })
  }

  return updateDrawDb
}

export const useUpdateRoom = () => {
  const updateRoom = useMutation(api.rooms.updateRoom)

  const updateRoomDb = async (
    room_id: string,
    square_id: string,
    puppet: Puppet
  ) => {
    return await updateRoom({
      room_id: room_id as Id<'rooms'>,
      square_id,
      puppet
    })
  }

  return updateRoomDb
}

export const useCreateRoom = () => {
  const createRoom = useMutation(api.rooms.createRoom)

  const createRoomDb = async (player_name: string) => {
    return await createRoom({
      player_name
    })
  }

  return createRoomDb
}

export const useJoinRoom = () => {
  const joinRoom = useMutation(api.rooms.joinRoom)

  const joinRoomDb = async (room_id: string, player_name: string) => {
    return await joinRoom({
      room_id: room_id as Id<'rooms'>,
      player_name
    })
  }

  return joinRoomDb
}
