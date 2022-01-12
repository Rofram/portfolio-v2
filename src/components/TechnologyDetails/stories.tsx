import { Story, Meta } from '@storybook/react'
import TechnologyDetails, { TechnologyDetailsProps } from '.'

import mock from './mock'

export default {
  title: 'TechnologyDetails',
  component: TechnologyDetails,
  args: mock
} as Meta

export const Default: Story<TechnologyDetailsProps> = (args) => (
  <TechnologyDetails {...args} />
)
