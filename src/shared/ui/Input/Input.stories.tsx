import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  argTypes: {
  }
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    value: 'test',
    placeholder: 'Test placeholder'
  }
}
