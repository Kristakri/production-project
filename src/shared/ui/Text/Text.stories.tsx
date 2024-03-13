import type { Meta, StoryObj } from '@storybook/react'
import { withThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextTheme } from './Text'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, itaque!'
  }
}

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, itaque!',
    theme: TextTheme.ERROR
  }
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title'
  }
}

export const OnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae.'
  }
}

export const DarkDefault: Story = {
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, itaque!'
  },
  decorators: withThemeDecorator(Theme.DARK)
}

export const DarkOnlyTitle: Story = {
  args: {
    title: 'Title'
  },
  decorators: withThemeDecorator(Theme.DARK)
}

export const DarkOnlyText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, recusandae.'
  },
  decorators: withThemeDecorator(Theme.DARK)
}
