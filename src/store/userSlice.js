import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userLogged: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLogged: (state, action) => {
      state.userLogged = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserLogged } = userSlice.actions

export default userSlice.reducer