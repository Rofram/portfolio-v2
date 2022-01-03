import { SectionProjectsProps } from '.'
import ProjectBoxMock from '../ProjectBox/mock'

const mock: SectionProjectsProps = {
  title: 'Personal Projects',
  projects: Array.from({ length: 6 }, () => ProjectBoxMock)
}

export default mock
