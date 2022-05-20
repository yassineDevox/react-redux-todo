

//initial State
const intialState = {
    counter: 0
}

//types
export const types = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET",
}

//actions
export const resetAction = () => ({
    type: types.RESET
})

export const decrementAction = (val) => ({
    type: types.DECREMENT,
    payload: { val }
})

export const inCrementAction = (val) =>
    ({ type: types.INCREMENT, payload: { val } })

//selector
export const counterSelector = (store) => {
    return store.todo.counter
}



// reducer
export const TodoReducer = (prevState = intialState, { type, payload }) => {

    switch (type) {

        case types.INCREMENT: {

            return { counter: prevState.counter + Number(payload.val) }
        }

        case types.DECREMENT: {
            return { counter: prevState.counter - Number(payload.val) }
        }

        case types.RESET: {
            return { counter: 0 }
        }

        default: return prevState
    }
}

// const testStore = createStore(
//     TodoReducer
// )

// testStore.dispatch({
//     type: types.INCREMENT,
//     payload: { val: 3 }
// })


