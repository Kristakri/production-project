import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type User, type UserSchema } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const initialState: UserSchema = {
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state, action: PayloadAction<User>) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }
  }
})

export const { actions: userAction } = userSlice
export const { reducer: userReducer } = userSlice
