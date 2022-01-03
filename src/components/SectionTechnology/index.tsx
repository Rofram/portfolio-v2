import Heading from 'components/Heading'
import * as S from './styles'

export type SectionTechnologyProps = {
  title: string
}

const SectionTechnology = ({ title }: SectionTechnologyProps) => (
  <S.Wrapper>
    <Heading title={title} />
    <S.Content></S.Content>
  </S.Wrapper>
)

export default SectionTechnology
