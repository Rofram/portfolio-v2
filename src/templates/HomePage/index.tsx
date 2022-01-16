import { Container } from 'components/Container'
import SectionAbout, { SectionAboutProps } from 'components/SectionAbout'
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
  sectionAbout: SectionAboutProps
}

const HomePage = ({
  sectionBanner,
  sectionProjects,
  sectionTechnology,
  sectionAbout
}: HomePageProps) => (
  <Base>
    <SectionBanner {...sectionBanner} />

    <Container>
      <SectionProjects {...sectionProjects} />
    </Container>

    <Container>
      <SectionTechnology {...sectionTechnology} />
    </Container>

    <Container>
      <SectionAbout {...sectionAbout} />
    </Container>
  </Base>
)

export default HomePage
