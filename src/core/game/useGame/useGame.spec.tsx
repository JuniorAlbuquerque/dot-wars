import { renderHook } from '@testing-library/react-hooks'
import { useGame } from '.'
import { Puppet } from '@/models/Puppet.model'
import { useGameStore } from '@/store/game/game.store'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { ReactNode } from 'react'

const convex = new ConvexReactClient('https://www.convex.dev/')

const wrapper = ({ children }: { children: ReactNode }) => (
  <ConvexProvider client={convex}>{children}</ConvexProvider>
)

describe('useGame', () => {
  it('should update the square when movePuppet is called', async () => {
    const { result } = renderHook(() => useGame(), {
      wrapper
    })
    const { result: resultStore } = renderHook(() => useGameStore())

    const puppet: Puppet = {
      player_id: 'player_one',
      size: 10,
      puppet_id: '0-player_one-10'
    }
    const square_id = 'square_0'

    await result.current.movePuppet({ puppet, square_id })

    const squares = resultStore.current.squares[square_id][0]

    expect(squares).toEqual(puppet)
  })
})
