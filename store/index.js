import { configureStore } from '@reduxjs/toolkit'
import playerReducer from "store/player"
import { localStorage } from 'utils'

export default configureStore({
  reducer: {
    player: playerReducer
  },
  preloadedState: localStorage.loadState(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorage.localStorageMiddleware)
})
