import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  flex: 1;
  flex-direction: column;
  padding: 10rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-areas:
    'i i i d d d'
    'i i i d d d'
    'i i i d d d';
`
