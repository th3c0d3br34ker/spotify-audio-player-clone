import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: false,
  controls: false,
  playing: false,
  sidebar: false,
  queue: false,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
    },
    setControls: (state, action) => {
      state.controls = action.payload
    },
    setPlaying: (state, action) => {
      state.playing = action.payload
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload
    },
    setQueue: (state, action) => {
      state.queue = action.payload
    }
  },
})

export const {
  setControls,
  setCurrent,
  setPlaying,
  setSidebar,
  setQueue
} = playerSlice.actions

export default playerSlice.reducer
