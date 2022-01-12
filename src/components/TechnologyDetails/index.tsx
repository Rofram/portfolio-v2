import * as S from './styles'
import Image from 'next/image'

export type TechnologyDetailsProps = {
  title: string
  description: string
  color: string
  img: {
    src: string
    alt: string
  }
}

const TechnologyDetails = ({
  title,
  description,
  img,
  color
}: TechnologyDetailsProps) => (
  <S.Wrapper color={color}>
    <div>
      <S.Title>{title}</S.Title>
      <Image src={img.src} alt={img.alt} width={100} height={100} />
    </div>
    <S.Description dangerouslySetInnerHTML={{ __html: description }} />
  </S.Wrapper>
)

export default TechnologyDetails
