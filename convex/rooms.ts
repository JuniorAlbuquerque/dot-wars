import { v } from 'convex/values'
import { query, mutation } from './_generated/server'
import { generateSquares } from '../src/utils/generateSquares'
import { PlayerId, SquareSchemaKey, puppetSchema } from 'schema'

export const getRoom = query({
  args: {
    room_id: v.id('rooms')
  },
  handler: async (ctx, args) => {
    const room = await ctx.db.get(args.room_id)

    return room
  }
})

export const createRoom = mutation({
  args: {
    players_name: v.object({
      player_one: v.string()
    })
  },
  handler: async (ctx, args) => {
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
        square_8: [],
        square_9: []
      },
      player_names: {
        player_one: args?.players_name?.player_one
      },
      winner: '',
      player_one: generateSquares('player_one'),
      player_two: generateSquares('player_two')
    })

    return data
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
    const currentSquares = room!.board![square_id as SquareSchemaKey]! || []
    const currentPlayerPuppets = room![puppet?.player_id as PlayerId]?.filter(
      (pup) => pup?.puppet_id !== puppet?.puppet_id
    )

    return await ctx.db.patch(room_id, {
      current_player: puppet?.player_id,
      board: {
        [square_id]: [...currentSquares, puppet]
      },
      [puppet?.player_id]: currentPlayerPuppets
    })
  }
})
