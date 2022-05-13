import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { types } from '../redux/reducers/todo'

const EditTaskPage = ({ decrementAction }) => {
  const inputRef = useRef(0)

  const deCrement = () => {
    const decrementValue = inputRef.current.value
    decrementAction(decrementValue)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={deCrement} >DECREMENT</button>
    </div>
  )
}

export default connect(null,
  (dispatch) => ({
    decrementAction: (x) => dispatch({
      type: types.DECREMENT,
      payload: { val: Number(x) }
    })
  })
)(EditTaskPage)