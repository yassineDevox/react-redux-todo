import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../redux/reducers/todo'


const EditTaskPage = () => {
  const inputRef = useRef(0)
  const call = useDispatch()

  const deCrement = () => {
    const val = inputRef.current.value
    call(decrement({val}))
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={deCrement} >DECREMENT</button>
    </div>
  )
}

export default EditTaskPage