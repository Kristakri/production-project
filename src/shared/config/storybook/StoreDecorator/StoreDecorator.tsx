import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'feature/AuthByUsername/model/slice/loginSlice'

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
}

export const withStoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>
): Decorator => (Story) =>
  <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, asyncReducers }}>
    <Story />
  </StoreProvider>
