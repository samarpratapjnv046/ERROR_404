import React, { useEffect, useState } from "react"
import axios from 'axios';
import {url} from '../App';
import { toast } from "react-toastify";

const ListSong = () => {

  const [data,setData] = useState([]);

  const fetchSongs = async () =>{

    try{

      const response = await axios.get(`${url}/api/song/list`);
      
      if(response.data.success){
        setData(response.data.songs)
      }

    }catch(error){
      toast.error("Error occur")

    }

  }

  const removeSong = async (id)=>{
    try {
      const response = await axios.post(`${url}/api/song/remove`,{id});

      if(response.data.success){
        toast.success(response.data.message)
        await fetchSongs();
      }


    } catch (error) {
      toast.error('Error occur');
      
    }

  }

  useEffect(()=>{
    fetchSongs();

  },[])
  return(
    <div>
      <p>All Song List</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <p>Image</p>
          <p>Name</p>
          <p>Album</p>
          <p>Duration</p>
          <p>Action</p>
        </div>
        {data.map((item,index)=>{
          return(<div key={index} className="grid grid-cols-[1fr_1fr_1Fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-grap-300 text-sm mr-5 ">
                    <img className="w-12" src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.album}</p>
                    <p>{item.duration}</p>
                    <p className= 'cursor-pointer' onClick={()=>removeSong(item._id)}>x</p>
            </div>)
        })}
      </div>
    </div>
  )
}

export default ListSong