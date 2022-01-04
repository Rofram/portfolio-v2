import { SectionProjectsProps } from '.'
import ProjectBoxMock from '../ProjectBox/mock'

const mock: SectionProjectsProps = {
  title: 'Personal Projects',
  projects: [
    ProjectBoxMock,
    {
      title: 'Happy',
      description:
        'Aplicação web para agendamento de serviços para orphanatos feito na semana Omnistack da Rocketseat',
      img: {
        url: '/img/happy.png',
        alt: 'Happy'
      }
    },
    ProjectBoxMock,
    ProjectBoxMock,
    ProjectBoxMock,
    ProjectBoxMock
  ]
}

export default mock
