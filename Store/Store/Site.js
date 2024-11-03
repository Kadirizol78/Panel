import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
  language: 'tr'
}

export const site = createSlice({
  name: 'site',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    }
  },
})

export const { setTheme, setLanguage } = site.actions
export default site.reducer
