import React from 'react'
import { useSelector } from 'react-redux'
import { POSTER_IMG_URL } from '../utils/constants'

const GptMovieSuggestions = () => {
  const {movieInfo} = useSelector(store=>store.gpt)
  return (
    <div className= ' pt-[5%] text-white   ' >
      <div className=' overscroll-none  h-full ' >
        <div className='overflow-y w-7/12 m-auto bg-black' >
        {movieInfo?.map((movie)=>{
        return(
          <div className=' px-10 mx-2 flex flex-col '>
            <h1 className='py-2 text-2xl col ' >{movie.title}</h1>
            <div className='flex' >
            <img
              className='rounded-lg w-36'
              src={POSTER_IMG_URL+movie.posterPath} 
              alt={movie.title}
            />
            <div className='text-xl p-4' >
            <h1  >{movie.overView}</h1>
            <h1>Rating⭐{movie.rating}</h1>
            </div>
            </div>
          </div>
        )
      })}
        </div>

      </div>
    </div>  
  )
}

export default GptMovieSuggestions
