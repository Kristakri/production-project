import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/user'

const initialState: UserSchema = {
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
})

export const { actions: userAction } = userSlice
export const { reducer: userReducer } = userSlice
