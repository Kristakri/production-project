import { type Decorator } from '@storybook/react'
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const withThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <Story />
    </div>
  </ThemeProvider>
)
