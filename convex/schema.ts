import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export const puppetSchema = v.object({
  puppet_id: v.string(),
  player_id: v.string(),
  size: v.number()
})

const squareSchemaKeys = [
  'square_0',
  'square_1',
  'square_2',
  'square_3',
  'square_4',
  'square_5',
  'square_6',
  'square_7',
  'square_8'
] as const

export type SquareSchemaKey = (typeof squareSchemaKeys)[number]
export type PlayerId = 'player_one' | 'player_two'

export default defineSchema({
  rooms: defineTable({
    room_id: v.optional(v.id('rooms')),
    current_player: v.string(),
    winner: v.string(),
    board: v.object({
      square_0: v.optional(v.array(puppetSchema)),
      square_1: v.optional(v.array(puppetSchema)),
      square_2: v.optional(v.array(puppetSchema)),
      square_3: v.optional(v.array(puppetSchema)),
      square_4: v.optional(v.array(puppetSchema)),
      square_5: v.optional(v.array(puppetSchema)),
      square_6: v.optional(v.array(puppetSchema)),
      square_7: v.optional(v.array(puppetSchema)),
      square_8: v.optional(v.array(puppetSchema))
    }),
    player_one: v.optional(v.array(puppetSchema)),
    player_two: v.optional(v.array(puppetSchema)),
    player_names: v.object({
      player_one: v.optional(v.string()),
      player_two: v.optional(v.string())
    })
  })
})
