import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginPassword', () => {
  test('should return admin', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin'
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('admin')
  })
  test('should word with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual(undefined)
  })
})
