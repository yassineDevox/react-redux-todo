import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { types } from '../redux/reducers/todo'

const AddTaskPage = ({ incrementAction }) => {
  const inputRef = useRef(0)

  const inCrement = () => {
    const incrementValue = inputRef.current.value
    incrementAction(incrementValue)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={inCrement} >INCREMENT</button>
    </div>
  )
}

export default connect(null,
  (dispatch) => ({
    incrementAction: (incrementValue) => dispatch({
      type: types.INCREMENT,
      payload: { val: Number(incrementValue) }
    })
  })
)(AddTaskPage)