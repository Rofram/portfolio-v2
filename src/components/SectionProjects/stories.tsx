import { Story, Meta } from '@storybook/react'
import SectionProjects, { SectionProjectsProps } from '.'

import mock from './mock'

export default {
  title: 'SectionProjects',
  component: SectionProjects,
  args: mock
} as Meta

export const Default: Story<SectionProjectsProps> = (args) => (
  <SectionProjects {...args} />
)
