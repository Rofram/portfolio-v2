import { render, screen } from '@testing-library/react'

import TechnologyIcon from '.'

import props from './mock'

describe('<TechnologyIcon />', () => {
  it('should render the heading', () => {
    render(<TechnologyIcon {...props} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
