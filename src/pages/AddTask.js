import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/reducers/todo'



const AddTaskPage = () => {
  const inputRef = useRef(0)
  const call = useDispatch()

  const inCrement = () => {
    const val = inputRef.current.value
    call(increment({val}))
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={inCrement} >INCREMENT</button>
    </div>
  )
}

export default AddTaskPage
