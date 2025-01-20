import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const isGptToggle = useSelector(store=>store.gpt?.showGptSearch)
  useNowPlayingMovies()

  return (
    <div>
      <Header />
      {isGptToggle ? <GptSearch/>:<><MainContainer /> <SecondaryContainer/></>}
      {/* 
          - Main Container
            - Video Background
            - Video Title
          - Secondary Container
            - MovieList *n
              - cards *n
      */}
    </div>
  )
}

export default Browse
