import Image from 'next/image'
import * as S from './styles'

export type SectionBannerProps = {
  author: string
  title: string
  img: {
    url: string
    alt: string
  }
}

const SectionBanner = ({ author, title, img }: SectionBannerProps) => (
  <S.Wrapper>
    <S.Content>
      <div>
        <S.Author>{author}</S.Author>
        <S.Title>{title}</S.Title>
      </div>
      <S.BannerImage>
        <Image src={img.url} alt={img.alt} width={336} height={521} />
      </S.BannerImage>
    </S.Content>
  </S.Wrapper>
)

export default SectionBanner
