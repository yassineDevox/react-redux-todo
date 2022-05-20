import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0 }

export const counterSelector = (s) => {
    return s.todo.counter
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        
        reset(state,action) {
            console.log(action)
            state.counter = 0
        },
        increment(state, { payload }) {
            state.counter = state.counter + payload.val
        },
        decrement(state, { payload }) {
            state.counter = state.counter - payload.val
        }
    },
})

//for ui components 
export const { reset, increment, decrement } = counterSlice.actions
// for redux tk store 
export const TodoReducer =  counterSlice.reducer
