import SectionBanner, { SectionBannerProps } from 'components/SectionBanner'
import SectionProjects, {
  SectionProjectsProps
} from 'components/SectionProjects'
import * as S from './styles'

export type HomePageProps = {
  sectionBanner: SectionBannerProps
  sectionProjects: SectionProjectsProps
}

const HomePage = ({ sectionBanner, sectionProjects }: HomePageProps) => (
  <S.Wrapper>
    <SectionBanner {...sectionBanner} />
    <SectionProjects {...sectionProjects} />
  </S.Wrapper>
)

export default HomePage
