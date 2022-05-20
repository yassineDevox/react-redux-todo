

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

// reducer
export const TodoReducer = (prevState = intialState, { type, payload }) => {

    switch (type) {

        case types.INCREMENT: {

           return  { counter: prevState.counter + payload.val }
        }

        case types.DECREMENT: {
           return  { counter: prevState.counter - payload.val }
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


