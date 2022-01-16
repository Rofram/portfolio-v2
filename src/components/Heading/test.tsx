import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import theme from 'styles/theme'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>lorem ipsum</Heading>)

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toBeInTheDocument()
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">lorem ipsum</Heading>)

    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      color: `${theme.colors.black}`
    })
  })

  it('should render a heading with the lineLeft passed', () => {
    renderWithTheme(<Heading lineLeft>lorem ipsum</Heading>)

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('padding-left', '0.8rem')

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('border-left', `0.7rem solid ${theme.colors.primary}`)
  })

  it('should render a heading with the lineBottom passed', () => {
    renderWithTheme(<Heading lineBottom>lorem ipsum</Heading>)

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">lorem ipsum</Heading>)

    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      'font-size': `${theme.font.sizes.medium}`
    })

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">lorem ipsum</Heading>)

    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      'font-size': `${theme.font.sizes.huge}`
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineBottom lineLeft lineColor="primary">
        lorem ipsum
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    })

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule('border-bottom', `0.5rem solid ${theme.colors.primary}`, {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineBottom lineLeft lineColor="secondary">
        lorem ipsum
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /lorem ipsum/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    })

    expect(
      screen.getByRole('heading', { name: /lorem ipsum/i })
    ).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after'
      }
    )
  })
})
