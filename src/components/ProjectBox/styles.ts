import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  max-width: 450px;
  flex-direction: column;
  background: #cccccc;
  border-radius: 20px;
  overflow: hidden;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: #444444;
  border: 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      > svg {
        margin-left: 13px;
      }
    }
  }
`

export const Title = styled.h2`
  width: 250px;
  font-size: 2rem;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Description = styled.p`
  width: 300px;
  font-size: 1.2rem;
  color: #fff;
  margin-top: 0.5rem;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
