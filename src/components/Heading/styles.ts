import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
  /* border: 1px solid #cccccc; */

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    width: 11.6rem;
    height: 1.2rem;
    background: #3285b4;
  }

  > h1 {
    color: #fff;
    font-size: 4rem;
    line-height: 4rem;

    @media (max-width: 660px) {
      font-size: 3rem;
    }
  }
`
