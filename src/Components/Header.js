import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL, NETFLIX_USER_AVATAR } from "../utils/constants";

const Header = () => {
  const user = useSelector(store=>store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({ uid:uid, email:email, displayName:displayName,photoUrl:photoURL}))
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    return () => unsubscribe;
  },[])

  return (
    <div className='absolute w-screen px-36 py-2 bg-gradient-to-b from-black flex justify-between' >
        <div>
            <img className="w-56" src={NETFLIX_LOGO_URL} alt="logo-image" />
        </div>
        <div className="flex justify-end items-center" >
            <select name="language" id="language" className="p-2 w-25 h-10 rounded-lg bg-black text-white border-gray-700 my-5" >
                <option value="english">English</option>
                <option value="hindi">हिन्दी</option>
            </select>
            {user&&
              <div className="flex justify-center items-center p-2 mx-2">
                <img src={NETFLIX_USER_AVATAR} alt="user-avatar" className=" w-16 h-16 rounded-xl m-2"/>
                <button className="text-white w-25 h-10 p-2 m-2 bg-red-600 rounded-lg" onClick={handleSignOut}>
                  Sign Out
                </button>
              </div>
            }
        </div>
    </div>
  );
};

export default Header;
