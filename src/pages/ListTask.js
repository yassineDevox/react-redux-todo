import React from 'react'
import { connect } from 'react-redux'
import { types } from '../redux/reducers/todo'

const ListTaskPage = ({ counterProp, resetCounterAction }) => {
  return (
    <div>
      {counterProp}
      <button onClick={() => resetCounterAction()}>Reset Counter </button>
    </div>
  )
}

// reviewed by arrbouchy : export default connect(
//   (store)=>({
//     counterProp : store.todo.counter
//   })
// )(ListTaskPage)


const f = connect(
  (store) => ({
    counterProp: store.todo.counter
  }),
  (dispatch) => ({
    resetCounterAction: () => dispatch({
      type: types.RESET,
    })
  })
)

export default f(ListTaskPage)
