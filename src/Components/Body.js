import React from 'react'
import Header from './Header'
import Login from './Login'

const Body = () => {
  return (
    <div>
        <img  className='w-full h-full absolute object-cover brightness-50' src='https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg' alt='bg-image' />
        <div>
            <Header/>
        </div>
        <Login/>

    </div>
  )
}

export default Body
 