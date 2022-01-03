import { render, screen } from '@testing-library/react'

import HomePage from '.'

import props from './mock'

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

describe('<HomePage />', () => {
  it('should render the heading', () => {
    render(<HomePage {...props} />)

    expect(screen.getByTestId('SectionBanner')).toBeInTheDocument()
    expect(screen.getByTestId('SectionProjects')).toBeInTheDocument()
  })
})
