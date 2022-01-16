import { Story, Meta } from '@storybook/react'
import SectionAbout, { SectionAboutProps } from '.'

import mock from './mock'

export default {
  title: 'SectionAbout',
  component: SectionAbout,
  args: mock
} as Meta

export const Default: Story<SectionAboutProps> = (args) => (
  <SectionAbout {...args} />
)
