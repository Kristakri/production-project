import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type StateSchema } from '../config/StateSchema'
import { createStore } from '../config/store'
import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps): JSX.Element => {
  const { children, initialState, asyncReducers } = props

  const store = createStore(initialState as StateSchema, asyncReducers as ReducersMapObject)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
