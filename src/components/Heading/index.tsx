import * as S from './styles'

export type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => (
  <S.Wrapper>
    <h1>{title}</h1>
  </S.Wrapper>
)

export default Heading
