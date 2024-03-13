import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {
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
    theme: ButtonTheme.CLEAR
  }
}

export const ClearInverted: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.CLEAR_INVERTED
  }
}

export const Outline: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.OUTLINE
  }
}

export const Disabled: Story = {
  args: {
    children: 'test',
    disabled: true,
    theme: ButtonTheme.OUTLINE
  }
}

export const BackgroundTheme: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.BACKGROUND
  }
}

export const InvertedBackgroundTheme: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const SquareMedium: Story = {
  args: {
    children: 'X',
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.M
  }
}

export const SquareLarge: Story = {
  args: {
    children: 'X',
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.L
  }
}

export const SquareExtraLarge: Story = {
  args: {
    children: 'X',
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.XL
  }
}

export const Medium: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
  }
}

export const Large: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

export const ExtraLarge: Story = {
  args: {
    children: 'Test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}
