import Image from 'next/image'
import Heading from 'components/Heading'
import * as S from './styles'

export type SectionAboutProps = {
  title: string
  about: string
  img: {
    src: string
    alt: string
  }
  socialLinks: Array<{
    url: string
    label: string
    img: {
      src: string
      alt: string
    }
  }>
}

const SectionAbout = ({
  title,
  about,
  img,
  socialLinks
}: SectionAboutProps) => (
  <S.Wrapper>
    <Heading lineBottom size="huge">
      {title}
    </Heading>

    <S.Content>
      <Heading>
        <p dangerouslySetInnerHTML={{ __html: about }}></p>
      </Heading>
      <div>
        <Image src={img.src} alt={img.alt} width={400} height={400} />
      </div>
    </S.Content>
    <S.Footer>
      {socialLinks.map((link) => (
        <a
          href={link.url}
          key={link.url}
          rel="noreferrer noopener"
          target="_blank"
        >
          <Image
            src={link.img.src}
            alt={link.img.alt}
            width={100}
            height={100}
          />
          <p>{link.label}</p>
        </a>
      ))}
    </S.Footer>
  </S.Wrapper>
)

export default SectionAbout
