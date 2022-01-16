import styled, { keyframes } from 'styled-components'

const popup = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const Wrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;

  > h2 {
    margin-top: 6rem;
  }

  @media (max-width: 1250px) {
    height: auto;
  }
`

export const Content = styled.div`
  margin-top: 6rem;
  display: grid;
  margin-top: 5rem;
  height: 60rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8rem;
  place-items: center;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
    height: auto;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`

export const Box = styled.div`
  animation: ${popup} 0.3s ease-in-out both;
`
