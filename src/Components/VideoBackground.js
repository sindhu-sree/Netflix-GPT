import React from 'react'
import useMovieVideo from '../Hooks/useMovieVideo'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {
    const movieTrailerInfo = useSelector(store=>store.movies?.trailerVideo) 
    useMovieVideo(movieId)

  return (
    <div className='w-screen' >
      <iframe 
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+movieTrailerInfo?.key+"?si=uAtBPI9pr2KJ7IZq?&autoplay=1&mute=1"} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" >
    </iframe>
    </div>
  )
}

export default VideoBackground
