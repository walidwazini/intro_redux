// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import authSlice from './auth'
import counterReducer from './counter'

// Cannot create more htan 1 store
const Store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice.reducer
  }
})


export default Store


// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
    // console.log(action)
//     return { counter: state.counter + action.amount, showCounter: state.showCounter }
//   }
//   if (action.type === 'decrement') {
//     return { counter: state.counter - 1, showCounter: state.showCounter }
//   }
//   if (action.type === 'plus10') {
//     return { counter: state.counter + action.amount, showCounter: state.showCounter }
//   }
//   if (action.type === 'reset') {
//     return { counter: 0, showCounter: state.showCounter }
//   }

//   if (action.type === 'toggle') {
//     return { showCounter: !state.showCounter, counter: state.counter }
//   }

//   return state
// }