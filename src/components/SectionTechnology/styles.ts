import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  flex: 1;
  flex-direction: column;
`

export const Content = styled.div`
  margin-top: 5rem;
  row-gap: 5rem;
  display: grid;
  grid-template-areas:
    'i i i d d d d d d d d'
    'i i i d d d d d d d d'
    'i i i d d d d d d d d';

  @media (max-width: 720px) {
    place-items: center;
    margin-top: 3rem;
    grid-template-areas:
      'i i'
      'i i'
      'i i'
      'i i'
      'i i'
      'd d'
      'd d'
      'd d';
  }
`
