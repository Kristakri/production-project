import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'

export function createStore (initialState: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
