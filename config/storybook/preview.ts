import { type Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { withRouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { withStyleDecorator } from
  'shared/config/storybook/StyleDecorator/StyleDecorator'
import { withThemeDecorator } from
  'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    withStyleDecorator,
    withThemeDecorator(Theme.LIGHT),
    withRouterDecorator
  ]
}

export default preview
