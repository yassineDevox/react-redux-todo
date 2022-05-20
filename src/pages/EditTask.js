import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { types } from '../redux/reducers/todo'

const EditTaskPage = () => {
  const inputRef = useRef(0)
  const call = useDispatch()

  const deCrement = () => {
    const decrementValue = inputRef.current.value
    call({
      type: types.DECREMENT,
      payload: { val: decrementValue }
    })
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={deCrement} >DECREMENT</button>
    </div>
  )
}

export default EditTaskPage