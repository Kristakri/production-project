import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/MainPage',
  component: ProfilePage,
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: withThemeDecorator(Theme.DARK)
}
