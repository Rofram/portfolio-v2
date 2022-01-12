import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TechnologyDetails from '.'

import mock from './mock'

describe('<TechnologyDetails />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TechnologyDetails {...mock} />)

    expect(screen.getByText(mock.title)).toBeInTheDocument()
  })
})
