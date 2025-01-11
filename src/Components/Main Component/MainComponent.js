import React from 'react'
import Header from '../Header/Header'

const MainComponent = () => {
  return (
    <div>
        {/* <div className='absolute w-full h-full inset-0 bg-black bg-opacity-25'></div> */}
        <img  className='w-full h-full absolute object-cover brightness-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg' />
        <div>
            <Header/>
        </div>
    </div>
  )
}

export default MainComponent
 