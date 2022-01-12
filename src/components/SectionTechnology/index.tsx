import Heading from 'components/Heading'
import TechnologyDetails, {
  TechnologyDetailsProps
} from 'components/TechnologyDetails'
import TechnologyIcon, { TechnologyIconProps } from 'components/TechnologyIcon'
import { useState } from 'react'
import * as S from './styles'

export type SectionTechnologyProps = {
  title: string
  techs: Array<{
    icon: TechnologyIconProps
    details: TechnologyDetailsProps
  }>
}

const SectionTechnology = ({ title, techs }: SectionTechnologyProps) => {
  const [activeTech, setActiveTech] = useState<TechnologyDetailsProps>(
    techs[0].details
  )

  return (
    <S.Wrapper>
      <Heading lineBottom size="huge">
        {title}
      </Heading>
      <S.Content>
        <S.IconGrid>
          {techs.map((tech) => (
            <button
              key={tech.details.title}
              onClick={() => setActiveTech(tech.details)}
            >
              <TechnologyIcon {...tech.icon} />
            </button>
          ))}
        </S.IconGrid>
        <TechnologyDetails {...activeTech} />
      </S.Content>
    </S.Wrapper>
  )
}

export default SectionTechnology
