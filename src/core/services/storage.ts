import { encryptStorage } from '@/utils/storage'
import { Id } from '@convex/_generated/dataModel'

type RoomStorageData = {
  room_id: Id<'rooms'>
  player: string
  player_name: string
}

export const saveRoomInStorage = (room: RoomStorageData) => {
  const current_rooms = encryptStorage.getItem('rooms')

  if (!current_rooms?.[room?.room_id]) {
    const new_rooms = {
      ...current_rooms,
      [room.room_id]: { player: room?.player, player_name: room?.player_name }
    }

    encryptStorage.setItem('rooms', new_rooms)
  }
}

export const updateRoomInStorage = (room: RoomStorageData) => {
  const current_rooms = encryptStorage.getItem('rooms')
  const new_rooms = {
    ...current_rooms,
    [room.room_id]: { player: room?.player, player_name: room?.player_name }
  }

  encryptStorage.setItem('rooms', new_rooms)
}

export const getRoomFromStorage = (room_id: Id<'rooms'>): RoomStorageData => {
  const rooms = encryptStorage.getItem('rooms')

  return rooms?.[room_id]
}
