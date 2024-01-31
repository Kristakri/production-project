import { type Decorator } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

export const withThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
)
