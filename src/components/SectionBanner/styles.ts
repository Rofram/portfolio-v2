import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  background: #333333;
  padding: 5rem;

  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-image: url(/img/space.png);
`

export const BannerImage = styled.div``

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;

  p {
    color: #f5f5f5;
    font-size: 2rem;
  }

  h1 {
    color: #fff;
    font-size: 5rem;
  }

  @media (max-width: 1050px) {
    flex-direction: column;

    ${BannerImage} {
      margin-top: 5rem;
    }
  }

  @media (max-width: 660px) {
    p {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 4rem;
    }
  }
`
