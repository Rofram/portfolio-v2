import styled from 'styled-components'

export const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > h2 {
    margin-top: 5rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  h2 {
    width: 600px;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    gap: 8rem;
  }

  @media (max-width: 720px) {
    h2 {
      width: auto;
    }
  }
`

export const Footer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    color: #fff;

    p {
      margin-top: 0.5rem;
    }
  }
`
