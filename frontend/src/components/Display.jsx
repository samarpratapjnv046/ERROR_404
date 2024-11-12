import { useContext, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { PlayerContext } from '../context/PlayerContext';

const Display = () => {
  const { albumsData=[]} = useContext(PlayerContext); // Default to empty array if undefined
  const displayRef = useRef();
  const location = useLocation();
  console.log(albumsData);

  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const albumData = albumsData.find((x) => x._id === albumId);
  const bgColor = albumData ? albumData.bgColour : "#121212"; // Default color if album not found

  // Update background color when isAlbum, bgColor, or albumData changes
  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.style.background = isAlbum && albumData
        ? `linear-gradient(${bgColor}, #121212)`
        : "#121212"; // Fallback background color
    }
  }, [isAlbum, bgColor, albumData]);

  return (
    <div ref={displayRef} className='w-[100%] px-6 m-2 pt-4 rounded bg-[#121212] text-white lg:w-[75%] overflow-auto lg:ml-0'>
      {albumsData.length > 0 ? (
        <Routes>
          <Route path='/' element={<DisplayHome />} />
          <Route path='/album/:id' element={<DisplayAlbum album={albumData} />} /> {/* Pass albumData to DisplayAlbum */}
        </Routes>
      ) : (
        <p>Loading...</p> // Display loading state until albumsData is fetched
      )}
    </div>
  );
};

export default Display;
