import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSelector, reset } from '../redux/reducers/todo'

const ListTaskPage = () => {

  const counter = useSelector(s => counterSelector(s))
  const call = useDispatch()
  const handleClick = () => {
    call(reset())
  }

  return (
    <div>
      {counter}
      <button onClick={handleClick}>Reset Counter </button>
    </div>
  )
}


export default ListTaskPage