import Heading from 'components/Heading'
import ProjectBox, { ProjectBoxProps } from 'components/ProjectBox'
import * as S from './styles'

export type SectionProjectsProps = {
  title: string
  projects: ProjectBoxProps[]
}

const SectionProjects = ({ title, projects }: SectionProjectsProps) => {
  return (
    <S.Wrapper>
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
