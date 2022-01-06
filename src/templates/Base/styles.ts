import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1 0 auto;
    /* margin-top: ${theme.spacings.xlarge}; */
  `}
`
