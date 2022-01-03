import { Story, Meta } from '@storybook/react'
import SectionBanner, { SectionBannerProps } from '.'

import mock from './mock'

export default {
  title: 'SectionBanner',
  component: SectionBanner,
  args: mock
} as Meta

export const Default: Story<SectionBannerProps> = (args) => (
  <SectionBanner {...args} />
)
