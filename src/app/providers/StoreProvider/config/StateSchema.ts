import { type ReducersMapObject, type EnhancedStore, type AnyAction, type Reducer, type CombinedState } from '@reduxjs/toolkit'
import { type CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'feature/AuthByUsername'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // Асинхронные редюсеры
  profile?: ProfileSchema
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
