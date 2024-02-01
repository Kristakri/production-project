import { type Decorator } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const withThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
)
