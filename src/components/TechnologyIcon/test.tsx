import { render, screen } from '@testing-library/react'

import TechnologyIcon from '.'

describe('<TechnologyIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<TechnologyIcon />)

    expect(
      screen.getByRole('heading', { name: /TechnologyIcon/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
