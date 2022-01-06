import Heading from 'components/Heading'
import TechnologyDetails from 'components/TechnologyDetails'
import TechnologyIcon, { TechnologyIconProps } from 'components/TechnologyIcon'
import * as S from './styles'

export type SectionTechnologyProps = {
  title: string
  icons: TechnologyIconProps[]
}

const SectionTechnology = ({ title, icons }: SectionTechnologyProps) => (
  <S.Wrapper>
    <Heading lineBottom size="huge">
      {title}
    </Heading>
    <S.Content>
      {icons.map((icon, index) => (
        <TechnologyIcon {...icon} key={`TechIcon-${index}`} />
      ))}
      <TechnologyDetails />
    </S.Content>
  </S.Wrapper>
)

export default SectionTechnology
