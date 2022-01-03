import { Story, Meta } from '@storybook/react'
import ProjectBox, { ProjectBoxProps } from '.'

import mock from './mock'

export default {
  title: 'ProjectBox',
  component: ProjectBox,
  args: mock
} as Meta

export const Default: Story<ProjectBoxProps> = (args) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#ccc'
    }}
  >
    <ProjectBox {...args} />
  </div>
)
