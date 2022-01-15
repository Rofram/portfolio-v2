import HomeTemplate from 'templates/HomePage'
import homePageMock from 'templates/HomePage/mock'

export default function HomePage() {
  return <HomeTemplate {...homePageMock} />
}
