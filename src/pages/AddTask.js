import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { types } from '../redux/reducers/todo'

const AddTaskPage = () => {
  const inputRef = useRef(0)
  const call = useDispatch()

  const inCrement = () => {
    const incrementValue = inputRef.current.value
    call({ type: types.INCREMENT, payload: { val: incrementValue } })
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={inCrement} >INCREMENT</button>
    </div>
  )
}

export default AddTaskPage
