import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: withThemeDecorator(Theme.DARK)
}
