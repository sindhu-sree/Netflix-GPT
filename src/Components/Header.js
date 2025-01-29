import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL, NETFLIX_USER_AVATAR, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import {addLanguage} from "../utils/configSlice"
import lang from "../utils/LanguageConstants";

const Header = () => {
  const user = useSelector(store=>store.user)
  const showGptSearch = useSelector(store=>store.gpt?.showGptSearch)
  const language = useSelector(store=>store.language?.selectedLanguage)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const handleGptToggle = ()=>{
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e)=>{
    dispatch(addLanguage(e.target.value))
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
    <div className='fixed w-screen px-36 py-2 bg-gradient-to-b from-black flex justify-between' >
        <div>
            <img className="w-56" src={NETFLIX_LOGO_URL} alt="logo-image" />
        </div>
        <div className="flex justify-end items-center" >
            {user&&<button className="text-white bg-purple-800 p-2 rounded-lg mx-5" onClick={handleGptToggle} > {showGptSearch? lang[language].homePage : lang[language].gptSearch } </button>}
            <select name="language" id="language" onChange={(e)=>handleLanguageChange(e)} className="p-2 w-25 h-10 rounded-lg bg-black text-white border-gray-700 my-5" >
              {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier}  value= {lang.identifier} > {lang.name} </option>)}
            </select>
            {user&&
              <div className="flex justify-center items-center p-2 mx-2 my-2">
                <div>
                <img src={NETFLIX_USER_AVATAR} alt="user-avatar" className=" w-14 h-14 rounded-xl m-2"/>
                <h1 className="text-white font-bold" > {user.displayName} </h1>
                </div>
                <button className="text-white w-25 h-10 p-2 m-2 bg-red-600 rounded-lg" onClick={handleSignOut}>
                  {lang[language].signOut}
                </button>
              </div>
            }
        </div>
    </div>
  );
};

export default Header;
