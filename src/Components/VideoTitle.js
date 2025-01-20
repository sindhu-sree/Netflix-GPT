import React from 'react'
import { FaPlay } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[6%] mt-[6rem] px-12 absolute text-white  bg-gradient-to-t from-black ' >
      <h1 className=' font-bold text-5xl' >{title}</h1>
      <p className=' w-3/12 py-4 text-md ' >{overview}</p>
        <div className='flex' >
        <button className='p-2 mx-2 w-28 rounded-lg bg-white text-black font-semibold text-xl flex items-center hover:bg-gray-300 ' >
            <FaPlay className='w-6 h-6 m-2' />
            <p>Play</p>  
        </button>
        <button className='p-2 mx-2 w-38 rounded-lg bg-gray-500 text-white font-semibold text-xl flex items-center hover:bg-gray-800'>
            <IoIosInformationCircleOutline className='w-6 h-8 m-2' />More Info
        </button>
        </div>
    </div>
  )
}

export default VideoTitle;