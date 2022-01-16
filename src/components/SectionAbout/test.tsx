import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SectionAbout from '.'

import mock from './mock'

describe('<SectionAbout />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SectionAbout {...mock} />)

    expect(
      screen.getByRole('heading', { name: /about me/i })
    ).toBeInTheDocument()
  })
})
