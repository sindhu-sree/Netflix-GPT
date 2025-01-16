import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import Header from './Header'
import Login from './Login'
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({ uid:uid, email:email, displayName:displayName,photoUrl:photoURL}))
        } else {
          dispatch(removeUser());
        }
      });
    },[])
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
 