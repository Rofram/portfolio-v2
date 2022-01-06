import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import HomePage from '.'

import props from './mock'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base">{children}</div>
  }
}))

jest.mock('../../components/SectionBanner', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="SectionBanner" />
    }
  }
})

jest.mock('../../components/SectionProjects', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="SectionProjects" />
    }
  }
})

jest.mock('../../components/SectionTechnology', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="SectionTechnology" />
    }
  }
})

describe('<HomePage />', () => {
  it('should render the heading', () => {
    renderWithTheme(<HomePage {...props} />)

    expect(screen.getByTestId('Base')).toBeInTheDocument()
    expect(screen.getByTestId('SectionBanner')).toBeInTheDocument()
    expect(screen.getByTestId('SectionProjects')).toBeInTheDocument()
    expect(screen.getByTestId('SectionTechnology')).toBeInTheDocument()
  })
})
