import * as S from './styles'
import Image from 'next/image'
import { Github } from '@styled-icons/fa-brands'
import { Web } from '@styled-icons/material-rounded'

export type ProjectBoxProps = {
  title: string
  description: string
}

const ProjectBox = ({ title, description }: ProjectBoxProps) => (
  <S.Wrapper>
    <Image src="/img/ignite-gobarber.png" width={450} height={245} />
    <S.Content>
      <div>
        <S.Title>{title}</S.Title>
        <div>
          <Web size={24} color="#fff" />
          <Github size={24} color="#fff" />
        </div>
      </div>
      <S.Description>{description}</S.Description>
    </S.Content>
  </S.Wrapper>
)

export default ProjectBox
