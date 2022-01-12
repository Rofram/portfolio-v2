import styled from 'styled-components'

export const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    margin-top: 5rem;
    align-self: flex-start;
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  h2 {
    width: 600px;
  }
`
