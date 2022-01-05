import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import theme from 'styles/theme'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument()
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: `${theme.colors.black}`
    })
  })

  it('should render a heading with the lineLeft passed', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'padding-left',
      '0.8rem'
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-left',
      `0.7rem solid ${theme.colors.primary}`
    )
  })

  it('should render a heading with the lineBottom passed', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineBottom lineLeft lineColor="primary">
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    })

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    )
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineBottom lineLeft lineColor="secondary">
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    })

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after'
      }
    )
  })
})
