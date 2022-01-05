import { render, screen } from '@testing-library/react'

import TechnologyDetails from '.'

describe('<TechnologyDetails />', () => {
  it('should render the heading', () => {
    render(<TechnologyDetails />)

    expect(
      screen.getByRole('heading', { name: /TechnologyDetails/i })
    ).toBeInTheDocument()
  })
})
