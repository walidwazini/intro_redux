1. Create reducer for the Counter
2. create counter store, connect to the rcounter reducer

useSelector : to abstract state from store

useDispatch : to abstract reducer

createSlice : A function that accepts an initial state,
an object full of reducer functions,
and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

The reducer argument is passed to createReducer().
