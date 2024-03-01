import { type DeepPartial } from '@reduxjs/toolkit'
import { getCounterValue } from './getCounterValue'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getCounterValue', () => {
  test('Get value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    }

    expect(getCounterValue(state as StateSchema)).toBe(10)
  })
})
