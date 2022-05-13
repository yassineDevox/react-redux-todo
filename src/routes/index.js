import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import AddTaskPage from '../pages/AddTask'
import EditTaskPage from '../pages/EditTask'
import ListTaskPage from '../pages/ListTask'

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Counter</Link>
        </li>
        <li>
          <Link to="/inc">INC</Link>
        </li>
        <li>
          <Link to="/dec">DEC</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/inc" element={<AddTaskPage />} />
        <Route path="/" element={<ListTaskPage />} />
        <Route path="/dec" element={<EditTaskPage />} />
      </Routes>
    </BrowserRouter>
  )
}
