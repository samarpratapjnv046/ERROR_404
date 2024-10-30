import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <div className='w-[100%] px-6 m-2 pt-4 rounded bg-[#121212] text-white lg:w-[75%] overflow-auto lg:ml-0 '>
      <Routes>
        <Route path='/' element={<DisplayHome/>} />
      </Routes>
    </div>
  )
}

export default Display
