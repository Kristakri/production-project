import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type StateSchema } from '../config/StateSchema'
import { createStore } from '../config/store'
import { type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialStore?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps): JSX.Element => {
  const { children, initialStore } = props

  const store = createStore(initialStore as StateSchema)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
