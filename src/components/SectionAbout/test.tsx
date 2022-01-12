import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SectionAbout from '.'

describe('<SectionAbout />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SectionAbout />)

    expect(
      screen.getByRole('heading', { name: /about me/i })
    ).toBeInTheDocument()
  })
})
