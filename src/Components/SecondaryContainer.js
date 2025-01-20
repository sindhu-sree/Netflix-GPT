import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesList = useSelector(store=>store.movies?.nowPlayingMovies)
  const genrus = ['Now Playing','Trending','Horror','Now Playing']

  return (
    <div className='bg-black text-white -mt-10' >
      {moviesList&&
      <MovieList genrus= {genrus}  moviesList = {moviesList} />
      }
    </div>
  )
}

export default SecondaryContainer
