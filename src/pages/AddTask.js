import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { inCrementAction } from '../redux/reducers/todo'



const AddTaskPage = () => {
  const inputRef = useRef(0)
  const call = useDispatch()

  const inCrement = () => {
    const incrementValue = inputRef.current.value
    call(inCrementAction(incrementValue))
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={inCrement} >INCREMENT</button>
    </div>
  )
}

export default AddTaskPage
