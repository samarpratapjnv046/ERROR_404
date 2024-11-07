import  { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const displatRef =useRef();
  const location =useLocation()
  const isAlbum=location.pathname.includes("album");
  const albumId =isAlbum ? location.pathname.slice(-1): "";
  const bgColor =albumsData[Number(albumId)].bgColor;
  useEffect(()=>{
    if(isAlbum){
      displatRef.current.style.background=`linear-gradient(${bgColor},#121212)`
    }else{
      displatRef.current.style.background=`#121212`
    }
  })
  return (
    <div ref={displatRef} className='w-[100%] px-6 m-2 pt-4 rounded bg-[#121212] text-white lg:w-[75%] overflow-auto lg:ml-0 '>
      <Routes>
        <Route path='/' element={<DisplayHome/>} />
        <Route path='/album/:id' element={<DisplayAlbum/>} />
      </Routes>
    </div>
  )
}

export default Display
