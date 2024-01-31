import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'test'
  }
}

export const Clear: Story = {
  args: {
    children: 'test',
    theme: ThemeButton.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'test',
    theme: ThemeButton.OUTLINE
  }
}
