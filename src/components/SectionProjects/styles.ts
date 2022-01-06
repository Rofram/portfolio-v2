import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 1400px;
  padding: 2rem;

  > div {
    margin: 3rem 0;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8rem;
  place-items: center;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
