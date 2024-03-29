import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof ThemeSwitcher>

export const Light: Story = {
  args: {
  }
}

export const Dark: Story = {
  args: {

  },
  decorators: withThemeDecorator(Theme.DARK)
}
