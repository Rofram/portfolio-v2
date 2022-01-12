import styled, { css } from 'styled-components'

type WrapperProps = {
  color: string
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color }) => css`
    display: flex;
    width: 60rem;
    border-radius: 20px;
    flex-direction: column;
    padding: ${theme.spacings.medium};
    background-color: ${color};

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`

export const Title = styled.h2`
  font-size: 4.2rem;
`

export const Description = styled.p`
  font-size: 1.8rem;
  margin-top: 6rem;
`
