import { SectionAboutProps } from '.'

const mock: SectionAboutProps = {
  title: 'About me',
  about:
    'I&apos;m a Web Developer FullStack, looking to solve real-world problems. I&apos;m passionate about making open-source more accessible, creating software and tools to help people.',
  img: {
    src: '/img/hero-illustration.svg',
    alt: 'Rapaz sentado programando em três telas de computador'
  },
  socialLinks: [
    {
      url: 'https://www.linkedin.com/in/rofran/',
      label: 'LinkedIn',
      img: {
        src: '/img/social/linkedIn.svg',
        alt: 'linkedIn icon'
      }
    },
    {
      url: 'https://github.com/Rofram',
      label: 'Github',
      img: {
        src: '/img/social/github.svg',
        alt: 'Github icon'
      }
    },
    {
      url: 'https://twitter.com/Rofr4n',
      label: 'Twitter',
      img: {
        src: '/img/social/twitter.svg',
        alt: 'Twitter icon'
      }
    }
  ]
}

export default mock
