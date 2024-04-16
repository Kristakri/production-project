import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { withStoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
  args: {},
  decorators: withStoreDecorator({})
}

export const Dark: Story = {
  args: {},
  decorators: [withThemeDecorator(Theme.DARK), withStoreDecorator({})]
}
