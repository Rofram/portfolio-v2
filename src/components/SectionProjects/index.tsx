import Heading from 'components/Heading'
import ProjectBox, { ProjectBoxProps } from 'components/ProjectBox'
import { motion } from 'framer-motion'
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
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            initial={{ opacity: 0 }}
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: index * 0.1
            }}
          >
            <ProjectBox {...project} />
          </motion.div>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default SectionProjects
