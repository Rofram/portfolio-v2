import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Won Games</h1>
      </Base>
    )

    // children
    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument()
  })
})
