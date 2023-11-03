import { SquareFill } from '@/models/Game.model'
import { checkWinner } from '.'

describe('checkWinner', () => {
  it('should return the player ID of the winner if there is a winning combination', () => {
    const squares: SquareFill = {
      square_0: [
        { player_id: 'player_one', puppet_id: '0-player_one-10', size: 10 }
      ],
      square_1: [
        { player_id: 'player_one', puppet_id: '0-player_one-20', size: 20 }
      ],
      square_2: [
        { player_id: 'player_one', puppet_id: '0-player_one-30', size: 30 }
      ],
      square_3: [
        { player_id: 'player_two', puppet_id: '0-player_two-10', size: 10 }
      ],
      square_4: [
        { player_id: 'player_one', puppet_id: '0-player_one-10', size: 10 }
      ],
      square_5: [
        { player_id: 'player_two', puppet_id: '0-player_two-10', size: 10 }
      ],
      square_6: [
        { player_id: 'player_two', puppet_id: '0-player_two-10', size: 10 }
      ],
      square_7: [
        { player_id: 'player_one', puppet_id: '0-player_one-10', size: 10 }
      ],
      square_8: [
        { player_id: 'player_two', puppet_id: '0-player_two-10', size: 10 }
      ]
    }

    const winner = checkWinner(squares)

    expect(winner).toBe('player_one')
  })

  it('should return null if there is no winning combination', () => {
    const squares: SquareFill = {
      square_0: [
        { player_id: 'player_one', puppet_id: '0-player_one-10', size: 10 }
      ],
      square_1: [
        { player_id: 'player_two', puppet_id: '0-player_two-10', size: 10 }
      ],
      square_2: [
        { player_id: 'player_one', puppet_id: '0-player_one-10', size: 10 }
      ],
      square_3: [
        { player_id: 'player_two', puppet_id: '0-player_two-10', size: 10 }
      ],
      square_4: [
        { player_id: 'player_one', puppet_id: '0-player_one-10', size: 10 }
      ],
      square_5: [
        { player_id: 'player_two', puppet_id: '0-player_two-10', size: 10 }
      ],
      square_6: [
        { player_id: 'player_two', puppet_id: '0-player_two-10', size: 10 }
      ],
      square_7: [
        { player_id: 'player_one', puppet_id: '0-player_one-10', size: 10 }
      ],
      square_8: [
        { player_id: 'player_two', puppet_id: '0-player_two-10', size: 10 }
      ]
    }

    const winner = checkWinner(squares)

    expect(winner).toBeNull()
  })
})
