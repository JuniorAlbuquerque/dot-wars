import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button', {
      name: /click me/i
    })
    expect(button).toBeInTheDocument()
  })

  it('plays sound on click', () => {
    const playClickMock = vi.fn()

    render(<Button onClick={playClickMock}>Click me</Button>)

    const button = screen.getByRole('button', {
      name: /click me/i
    })

    fireEvent.click(button)

    expect(playClickMock).toHaveBeenCalled()
  })
})
