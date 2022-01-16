import * as S from './styles'
import Image from 'next/image'
import { Github } from '@styled-icons/fa-brands'
import { Web } from '@styled-icons/material-rounded'

export type ProjectBoxProps = {
  title: string
  description: string
  link: string
  img: {
    url: string
    alt: string
  }
}

const ProjectBox = ({ title, description, link, img }: ProjectBoxProps) => (
  <S.Wrapper href={link} target="_blank" rel="noreferrer noopener">
    <Image
      src={img.url}
      alt={img.alt}
      width={450}
      height={245}
      objectFit="cover"
    />
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
