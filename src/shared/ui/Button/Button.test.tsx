import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('Test button create', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
