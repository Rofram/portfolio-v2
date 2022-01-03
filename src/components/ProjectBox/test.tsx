import { render, screen } from '@testing-library/react'

import ProjectBox from '.'

import props from './mock'

describe('<ProjectBox />', () => {
  it('should render the heading', () => {
    render(<ProjectBox {...props} />)

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: props.title })).toHaveStyle({
      width: '250px',
      fontSize: '2rem',
      color: '#fff'
    })

    expect(screen.getByText(props.description)).toHaveStyle({
      width: '300px',
      fontSize: '1.2rem',
      color: '#fff',
      marginTop: '0.5rem'
    })
  })
})
