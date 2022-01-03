import { render, screen } from '@testing-library/react'

import SectionProjects from '.'

import props from './mock'

jest.mock('../Heading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Heading" />
    }
  }
})

jest.mock('../ProjectBox', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="ProjectBox" />
    }
  }
})

describe('<SectionProjects />', () => {
  it('should render the heading', () => {
    render(<SectionProjects {...props} />)

    expect(screen.getByTestId('Heading')).toBeInTheDocument()
    expect(screen.getAllByTestId('ProjectBox')).toHaveLength(
      props.projects.length
    )
  })
})
