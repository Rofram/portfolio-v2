import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'huge'
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  style?: React.CSSProperties
}

const Heading = ({
  children,
  size = 'medium',
  color,
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  style
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    style={style}
  >
    {children}
  </S.Wrapper>
)

export default Heading
