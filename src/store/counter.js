import { createSlice } from "@reduxjs/toolkit"

const initialCounterState = {
  value: 0, showCounter: true, showWarning: false,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      if (state.showCounter === false) return
      if (state.value > -5) {
        state.showWarning = false
      }
      state.value++  // this called as mutate the state
    },
    decrement(state) {
      if (state.showCounter === false) return

      if (state.value <= -5) {
        state.value = state.value - 0
        // state use to display cwaring message
        state.showWarning = true
      } else {
        state.value--
      }
    },
    increaseBy10(state, action) {
      if (state.showCounter === false) return

      // must be named as payload
      state.value = state.value + action.payload
    },
    reset(state) {
      if (state.showCounter === false) return

      state.value = 0
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  }
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer