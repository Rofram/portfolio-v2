import Image from 'next/image'
import * as S from './styles'
import { motion } from 'framer-motion'

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
        <motion.p
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
        >
          {author}
        </motion.p>
        <motion.h1
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.8, type: 'spring' }}
        >
          {title}
        </motion.h1>
      </div>
      <S.BannerImage>
        <Image src={img.url} alt={img.alt} width={336} height={521} />
      </S.BannerImage>
    </S.Content>
  </S.Wrapper>
)

export default SectionBanner
