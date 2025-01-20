import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({genrus,moviesList}) => {
  return (
    <div className='px-6  absolute -mt-80 z-10 bg-black ' >
        {genrus&&
            genrus?.map((gen,index)=>{
                return(
                    <div key={index}>
                        <h1 className=' font-bold text-3xl py-2' >{gen}</h1>
                        <div className='flex' >
                                {moviesList&& moviesList?.map(movie=>{
                                    return <MovieCard key={movie.id} movieInfo = {movie}  />
                                })
                                }
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default MovieList
