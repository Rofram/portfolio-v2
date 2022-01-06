import { Story, Meta } from '@storybook/react'
import TechnologyIcon, { TechnologyIconProps } from '.'

import mock from './mock'

export default {
  title: 'TechnologyIcon',
  component: TechnologyIcon,
  args: mock
} as Meta

export const Default: Story<TechnologyIconProps> = (args) => (
  <TechnologyIcon {...args} />
)
