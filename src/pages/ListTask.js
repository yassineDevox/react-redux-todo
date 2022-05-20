import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../redux/reducers/todo'

 const ListTaskPage = () => {

  const counter = useSelector(store => store.todo.counter)
  const call = useDispatch()
  const handleClick = () => {

    call({ type: types.RESET })
  }


  return (
    <div>
      {counter}
      <button onClick={handleClick}>Reset Counter </button>
    </div>
  )
}


export default ListTaskPage