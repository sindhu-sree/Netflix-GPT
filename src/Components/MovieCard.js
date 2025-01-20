import React from 'react'
import { POSTER_IMG_URL } from '../utils/constants'

const MovieCard = ({movieInfo}) => {
  return (
    <div className='w-60 p-6 ' >
      <img 
        className='rounded-lg'
        src={POSTER_IMG_URL+movieInfo.poster_path} 
        alt={movieInfo.title}
      />
    </div>
  )
}

export default MovieCard
