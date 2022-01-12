import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SectionTechnology from '.'

import props from './mock'

jest.mock('../Heading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Heading" />
    }
  }
})

describe('<SectionTechnology />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SectionTechnology {...props} />)

    expect(screen.getByTestId('Heading')).toBeInTheDocument()
  })
})
