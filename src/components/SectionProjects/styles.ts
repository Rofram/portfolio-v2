import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

  > div {
    margin: 3rem 0;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8rem;
  padding: 2rem;
  place-items: center;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
