import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Base
