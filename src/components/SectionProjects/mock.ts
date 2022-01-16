import { SectionProjectsProps } from '.'
import ProjectBoxMock from '../ProjectBox/mock'

const mock: SectionProjectsProps = {
  title: 'Personal Projects',
  projects: [
    ProjectBoxMock,
    {
      title: 'Happy',
      description:
        'Aplicação web para agendamento de serviços para orfanatos feito na semana Omnistack da Rocketseat',
      link: '#',
      img: {
        url: '/img/happy.png',
        alt: 'Happy'
      }
    },
    {
      title: 'Wongames',
      description:
        'E-commerce de games desenvolvido no curso React Avançado do Willian Justen',
      link: '#',
      img: {
        url: '/img/wongames.svg',
        alt: 'Wongames'
      }
    },
    {
      title: 'Move-it',
      description:
        'O Move.it é um app que usa a técnica de Pomodoro, ao terminar os 25 minutos do contador são oferecidos desafios que trabalham o corpo e a visão.',
      link: 'https://moveit-nextjs-bice.vercel.app/',
      img: {
        url: '/img/moveit.svg',
        alt: 'Move-it'
      }
    },
    {
      title: 'Ig.news',
      description:
        'O projeto ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura.',
      link: '#',
      img: {
        url: '/img/igNews.svg',
        alt: 'Ig.news'
      }
    },
    {
      title: 'Letmeask',
      description:
        'Já pensou que em lives as pessoas recebem muitas perguntas, principalmente quando se ensina alguma coisa, ou apresenta algum produto/serviço?',
      link: '#',
      img: {
        url: '/img/Letmeask.svg',
        alt: 'Letmeask'
      }
    }
  ]
}

export default mock
