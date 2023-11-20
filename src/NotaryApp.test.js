import { render, screen } from '@testing-library/react'
import NotaryApp from './NotaryApp'

test('renders learn react link', () => {
  render(<NotaryApp />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
