import React from 'react'
import Header from './Header'
import Login from './Login'
import { NETFLIX_BG_IMAGE } from '../utils/constants'


const Body = () => {


  return (
    <div>
        <img  className='w-full h-full absolute object-cover brightness-50' src={NETFLIX_BG_IMAGE} alt='bg-image' />
        <div>
            <Header/>
        </div>
        <Login/>

    </div>
  )
}

export default Body
 