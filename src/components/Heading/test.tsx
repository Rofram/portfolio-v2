import { render, screen } from '@testing-library/react'

import Heading from '.'

const mock = {
  title: 'Heading'
}

describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading {...mock} />)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Heading/i }).parentElement
    ).toHaveStyleRule('background', '#3285b4', {
      modifier: '&::after'
    })
  })
})
