import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

export default meta

type Story = StoryObj<typeof MainPage>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: withThemeDecorator(Theme.DARK)
}
