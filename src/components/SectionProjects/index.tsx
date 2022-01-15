import Heading from 'components/Heading'
import ProjectBox, { ProjectBoxProps } from 'components/ProjectBox'
import { useRef } from 'react'
import * as S from './styles'

export type SectionProjectsProps = {
  title: string
  projects: ProjectBoxProps[]
}

const SectionProjects = ({ title, projects }: SectionProjectsProps) => {
  const scrollRef = useRef(null)

  return (
    <S.Wrapper ref={scrollRef}>
      <Heading lineBottom size="huge">
        {title}
      </Heading>
      <S.Content>
        {projects.map((project) => (
          <S.Box key={project.title}>
            <ProjectBox {...project} />
          </S.Box>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default SectionProjects
