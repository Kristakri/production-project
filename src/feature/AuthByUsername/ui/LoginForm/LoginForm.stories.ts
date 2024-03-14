import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { withStoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof LoginForm> = {
  title: 'feature/LoginForm',
  component: LoginForm,
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof LoginForm>

export const Light: Story = {
  args: {}
}

export const Error: Story = {
  args: {},
  decorators: [
    withStoreDecorator({
      loginForm: { error: 'ERROR' }
    })
  ]
}

export const Loading: Story = {
  args: {},
  decorators: [
    withStoreDecorator({
      loginForm: { isLoading: true }
    })
  ]
}

export const Dark: Story = {
  args: {},
  decorators: withThemeDecorator(Theme.DARK)
}
