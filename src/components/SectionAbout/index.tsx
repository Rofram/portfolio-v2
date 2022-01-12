import Heading from 'components/Heading'
import * as S from './styles'

const SectionAbout = () => (
  <S.Wrapper>
    <Heading lineBottom size="huge">
      About me
    </Heading>

    <S.Content>
      <Heading>
        I&apos;m a Web Developer FullStack, looking to solve real-world
        problems. I&apos;m passionate about making open-source more accessible,
        creating software and tools to help people.
      </Heading>
    </S.Content>
  </S.Wrapper>
)

export default SectionAbout
