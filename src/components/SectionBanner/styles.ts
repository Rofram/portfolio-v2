import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  from {
    border-right-color: #f5f5f5;
  }
  to {
    border-right-color: transparent;
  }
`

const typingAuthor = (size: number) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${size}rem;
    border-right-color: transparent;
  }
`

const typingTitle = (size: number) => keyframes`
  0% {
    width: 0;
    border-right-color: transparent;
  }
  1% {
    border-right-color: #f5f5f5;
  }
  100% {
    width: ${size}rem;
  }
`

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  background: #333333;
  padding: 0 3rem;

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

  @media (max-width: 1050px) {
    flex-direction: column;

    ${BannerImage} {
      margin-top: 5rem;
    }
  }
`

export const Author = styled.p`
  color: #f5f5f5;
  font-size: 2rem;
  border-right: 1px solid #f5f5f5;
  white-space: nowrap;
  width: 0;
  overflow: hidden;
  animation: ${blink} 500ms infinite steps(16) normal,
    ${typingAuthor(16.5)} 4s 1s steps(16) normal both;

  @media (max-width: 720px) {
    font-size: 1.5rem;
    animation: ${blink} 500ms infinite steps(16) normal,
      ${typingAuthor(12.3)} 4s 1s steps(16) normal both;
  }
`

export const Title = styled.h1`
  color: #fff;
  font-size: 5rem;
  border-right: 1px solid #f5f5f5;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: ${blink} 500ms infinite steps(37) normal,
    ${typingTitle(56)} 6s 5s steps(37) normal both;

  @media (max-width: 720px) {
    font-size: 3rem;
    animation: ${blink} 500ms infinite steps(37) normal,
      ${typingTitle(33.5)} 6s 5s steps(37) normal both;
  }
`
