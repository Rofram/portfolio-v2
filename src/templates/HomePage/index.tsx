import { Container } from 'components/Container'
import SectionBanner, { SectionBannerProps } from 'components/SectionBanner'
import SectionProjects, {
  SectionProjectsProps
} from 'components/SectionProjects'
import SectionTechnology, {
  SectionTechnologyProps
} from 'components/SectionTechnology'
import Base from 'templates/Base'

export type HomePageProps = {
  sectionBanner: SectionBannerProps
  sectionProjects: SectionProjectsProps
  sectionTechnology: SectionTechnologyProps
}

const HomePage = ({
  sectionBanner,
  sectionProjects,
  sectionTechnology
}: HomePageProps) => (
  <Base>
    <SectionBanner {...sectionBanner} />

    <Container>
      <SectionProjects {...sectionProjects} />
    </Container>

    <Container>
      <SectionTechnology {...sectionTechnology} />
    </Container>
  </Base>
)

export default HomePage
