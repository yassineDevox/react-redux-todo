import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSelector, resetAction } from '../redux/reducers/todo'

 const ListTaskPage = () => {

  const counter = useSelector(store => counterSelector(store))
  const call = useDispatch()
  const handleClick = () => {
    call(resetAction())
  }
  
  return (
    <div>
      {counter}
      <button onClick={handleClick}>Reset Counter </button>
    </div>
  )
}


export default ListTaskPage