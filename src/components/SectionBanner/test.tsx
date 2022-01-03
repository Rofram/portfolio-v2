import { render, screen } from '@testing-library/react'

import SectionBanner from '.'

import props from './mock'

describe('<SectionBanner />', () => {
  it('should render the heading', () => {
    render(<SectionBanner {...props} />)

    expect(screen.getByText(props.author)).toBeInTheDocument()
    expect(screen.getByText(props.title)).toBeInTheDocument()

    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
