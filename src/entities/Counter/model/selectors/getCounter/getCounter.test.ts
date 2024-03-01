import { type DeepPartial } from 'redux'
import { getCounter } from './getCounter'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 0
      }
    }

    expect(getCounter(state as StateSchema)).toEqual({ value: 0 })
  })
})
