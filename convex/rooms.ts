import { ConvexError, v } from 'convex/values'
import { query, mutation } from './_generated/server'
import { generateSquares } from '../src/utils/generateSquares'
import { PlayerId, SquareSchemaKey, puppetSchema } from 'schema'

export const getRoom = query({
  args: {
    room_id: v.id('rooms')
  },
  handler: async (ctx, args) => {
    try {
      const room = await ctx.db.get(args.room_id)

      return room
    } catch (error) {
      throw new ConvexError('room_id does not exists')
    }
  }
})

export const createRoom = mutation({
  args: {
    player_name: v.string()
  },
  handler: async (ctx, args) => {
    if (!args?.player_name) {
      throw new ConvexError('player_name is required')
    }

    const data = await ctx.db.insert('rooms', {
      current_player: 'player_one',
      board: {
        square_0: [],
        square_1: [],
        square_2: [],
        square_3: [],
        square_4: [],
        square_5: [],
        square_6: [],
        square_7: [],
        square_8: []
      },
      player_names: {
        player_one: args?.player_name
      },
      winner: '',
      player_one: generateSquares('player_one'),
      player_two: generateSquares('player_two')
    })

    return {
      room_id: data,
      player: 'player_one'
    }
  }
})

export const updateRoom = mutation({
  args: {
    room_id: v.id('rooms'),
    square_id: v.string(),
    puppet: puppetSchema
  },
  handler: async (ctx, args) => {
    const { room_id, square_id, puppet } = args

    const room = await ctx.db.get(room_id)

    if (!room) {
      throw new ConvexError('room_id does not exists')
    }

    const currentSquares = room!.board![square_id as SquareSchemaKey]!
    const currentPlayerPuppets = room![puppet?.player_id as PlayerId]?.filter(
      (pup) => pup?.puppet_id !== puppet?.puppet_id
    )

    return await ctx.db.patch(room_id, {
      current_player: puppet?.player_id,
      board: {
        ...room?.board,
        [square_id]: [...currentSquares, puppet]
      },
      [puppet?.player_id]: currentPlayerPuppets
    })
  }
})

export const joinRoom = mutation({
  args: {
    room_id: v.id('rooms'),
    player_name: v.string()
  },
  handler: async (ctx, args) => {
    const { room_id, player_name } = args

    const room = await ctx.db.get(room_id)

    if (!room) {
      throw new ConvexError('room_id does not exists')
    }

    if (!player_name) {
      throw new ConvexError('player_name is required')
    }

    if (room?.player_names?.player_one && room?.player_names?.player_two) {
      throw new ConvexError('the room is full ')
    }

    return await ctx.db.patch(room_id, {
      player_names: {
        ...room?.player_names,
        player_two: player_name
      }
    })
  }
})
