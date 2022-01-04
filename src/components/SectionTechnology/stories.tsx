import { Story, Meta } from '@storybook/react'
import SectionTechnology, { SectionTechnologyProps } from '.'

import mock from './mock'

export default {
  title: 'SectionTechnology',
  component: SectionTechnology,
  args: mock
} as Meta

export const Default: Story<SectionTechnologyProps> = (args) => (
  <SectionTechnology {...args} />
)
