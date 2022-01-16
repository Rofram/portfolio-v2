import Image from 'next/image'
import * as S from './styles'

export type TechnologyIconProps = {
  src: string
  alt: string
  width: number
  height: number
}

const TechnologyIcon = ({
  src,
  alt,
  width = 150,
  height = 150
}: TechnologyIconProps) => (
  <S.Wrapper>
    <Image src={src} alt={alt} width={width} height={height} />
  </S.Wrapper>
)

export default TechnologyIcon
