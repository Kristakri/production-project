import { type DeepPartial } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const withStoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (Story) =>
  <StoreProvider initialState={state}>
    <Story />
  </StoreProvider>
