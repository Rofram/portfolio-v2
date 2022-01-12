import styled from 'styled-components'
import * as TechnologyDetailsStyles from 'components/TechnologyDetails/styles'

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;

  > h2 {
    margin-top: 5rem;
  }

  @media (max-width: 1250px) {
    height: auto;
  }
`

export const Content = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  height: 60rem;

  @media (max-width: 1250px) {
    height: auto;
    justify-content: center;
    align-items: center;

    ${TechnologyDetailsStyles.Wrapper} {
      display: none;
    }
  }
`

export const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  width: 60rem;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }
`
