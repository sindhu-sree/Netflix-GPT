import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BG_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div  >
      <img className='fixed w-full h-full -z-20 object-cover brightness-50'  src={NETFLIX_BG_IMAGE} alt='netflix-bg'  />
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
