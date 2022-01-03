import styled from 'styled-components'

export const Wrapper = styled.section`
  background: #121214;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-areas:
    'i i i m m m'
    'i i i m m m'
    'i i i m m m';
`
