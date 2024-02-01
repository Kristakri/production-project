import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
  },
  args: {
    to: '*',
    children: 'test link'
  }
}

export default meta

type Story = StoryObj<typeof AppLink>

export const LightPrimary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  }
}

export const LightSecondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  }
}

export const DarkPrimary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  },
  decorators: withThemeDecorator(Theme.DARK)
}

export const DarkSecondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  },
  decorators: withThemeDecorator(Theme.DARK)
}
