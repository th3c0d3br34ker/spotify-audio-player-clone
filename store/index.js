import { configureStore } from '@reduxjs/toolkit'
import playerReducer from "store/player"

export default configureStore({
  reducer: {
    player: playerReducer
  },
})
