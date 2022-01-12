import { SectionTechnologyProps } from '.'

const mock: SectionTechnologyProps = {
  title: 'Current Focus',
  techs: [
    {
      icon: {
        src: '/img/techs/typescript.svg',
        alt: 'Typescript icon'
      },
      details: {
        title: 'Typescript',
        description:
          'TypeScript é uma ferramenta que adiciona tipagem estática ao JavaScript que por padrão é uma linguagem que possui tipagem dinâmica, ou seja, as variáveis e funções podem assumir tipos distintos durante o tempo de execução. </br></br> Vale lembrar o código TypeScript é utilizando somente em ambiente de desenvolvimento e é totalmente convertido para JavaScript no processo de build de produção, ou seja, o navegador ou o Node lerão somente código JS no fim das contas.',
        color: '#54BCE8',
        img: {
          src: '/img/techs/typescript.svg',
          alt: 'Typescript icon'
        }
      }
    },
    {
      icon: {
        src: '/img/techs/react.svg',
        alt: 'React icon'
      },
      details: {
        title: 'React.JS',
        description:
          'React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface). </br></br> Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros. </br></br> A princípio, todas essas atividades, chamadas de estados, tinham uma descrição muito complexa. Com o React, esta descrição torna-se mais simples, bem como também é simplificada a conexão entre HTML, CSS e JavaScript e todos os componentes de uma página.',
        color: '#1AA1FF',
        img: {
          src: '/img/techs/react.svg',
          alt: 'React icon'
        }
      }
    },
    {
      icon: {
        src: '/img/techs/nextjs.svg',
        alt: 'Next.js icon'
      },
      details: {
        title: 'Next.JS',
        description:
          'Next.js é um framework React com foco em produção e eficiência criado e mantido pela equipe da Vercel, o Nextjs busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento fornecendo uma estrutura completa para você iniciar seu projeto.',
        color: '#afafaf',
        img: {
          src: '/img/techs/nextjs.svg',
          alt: 'Next.js icon'
        }
      }
    },
    {
      icon: {
        src: '/img/techs/jest.svg',
        alt: 'Jest icon'
      },
      details: {
        title: 'Jest',
        description:
          'Jest é um framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine. Jest é uma das ferramentas de teste unitário mais difundidas dentro da comunidade de JavaScript.',
        color: '#c74984',
        img: {
          src: '/img/techs/jest.svg',
          alt: 'Jest icon'
        }
      }
    },
    {
      icon: {
        src: '/img/techs/rtl.svg',
        alt: 'RTL icon'
      },
      details: {
        title: 'React Testing Library',
        description:
          'React Testing Library é um conjunto de utilitários que permitem testar componentes React sem depender dos detalhes de implementação. Essa abordagem facilita a refatoração e também te orienta para as melhores práticas de acessibilidade.</br></br> Embora não forneça uma maneira de renderizar “superficialmente” um componente sem seus filhos, um test runner como o Jest permite fazer isso através de mock.',
        color: '#b74242',
        img: {
          src: '/img/techs/rtl.svg',
          alt: 'RTL icon'
        }
      }
    },
    {
      icon: {
        src: '/img/techs/storybook.svg',
        alt: 'Storybook icon'
      },
      details: {
        title: 'Storybook',
        description:
          'O Storybook é uma ferramenta open source que prepara um ambiente de desenvolvimento para componentes de UI. Ele possui um CLI para ser utilizado no terminal, isso quer dizer que dentro desta ferramenta podemos organizar nossos componentes.',
        color: '#fb6378',
        img: {
          src: '/img/techs/storybook.svg',
          alt: 'Storybook icon'
        }
      }
    },
    {
      icon: {
        src: '/img/techs/graphql.svg',
        alt: 'GraphQL icon'
      },
      details: {
        title: 'GraphQL',
        description:
          'GraphQL é uma linguagem de consulta e ambiente de execução voltada a servidores para as interfaces de programação de aplicações (APIs) cuja prioridade é fornecer exatamente os dados que os clientes solicitam e nada além.</br></br> O GraphQL foi desenvolvido para tornar as APIs mais rápidas, flexíveis e intuitivas para os desenvolvedores. Ainda é possível implantá-lo em um ambiente de desenvolvimento integrado (IDE) conhecido como GraphQL.</br></br> Como alternativa à arquitetura REST, o GraphQL permite aos desenvolvedores construir solicitações que extraem os dados de várias fontes em uma única chamada de API.',
        color: '#f46ac7',
        img: {
          src: '/img/techs/graphql.svg',
          alt: 'GraphQL icon'
        }
      }
    },
    {
      icon: {
        src: '/img/techs/apollo.svg',
        alt: 'Apollo icon'
      },
      details: {
        title: 'Apollo',
        description:
          'O Apollo server é umas das melhores alternativas para se criar APIs, já o Apollo client é uma solução completa para conectar o seu front-end com a API. O Apollo client já possui um ótimo suporte ao React, fornecendo componentes que facilitam a integração com o back-end.',
        color: '#474c7b',
        img: {
          src: '/img/techs/apollo.svg',
          alt: 'Apollo icon'
        }
      }
    },
    {
      icon: {
        src: '/img/techs/strapi.svg',
        alt: 'Strapi icon'
      },
      details: {
        title: 'Strapi',
        description:
          'O Strapi é um CMS de código aberto baseado no Node. js para todas as necessidades de API e gerenciamento de conteúdo de seus desenvolvedores. Em minutos, você tem uma API funcional e pode se concentrar no desenvolvimento de software sem o incômodo das complexidades do CMS.',
        color: '#6d6dbc',
        img: {
          src: '/img/techs/strapi.svg',
          alt: 'Strapi icon'
        }
      }
    }
  ]
}

export default mock
