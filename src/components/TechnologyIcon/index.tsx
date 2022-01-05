import Image from 'next/image'
import * as S from './styles'

export type TechnologyIconProps = {
  src: string
  alt: string
}

const TechnologyIcon = ({ src, alt }: TechnologyIconProps) => (
  <S.Wrapper>
    <Image src={src} alt={alt} width={200} height={200} />
  </S.Wrapper>
)

export default TechnologyIcon
