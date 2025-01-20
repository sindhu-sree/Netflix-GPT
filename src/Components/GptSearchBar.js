import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/LanguageConstants'

const GptSearchBar = () => {
    const language = useSelector(store=>store.language?.selectedLanguage)
  return (
    <div className='pt-[10%] flex justify-center' >
        <form className='bg-black w-1/2 grid grid-cols-12 ' >
            <input 
                type='text' 
                placeholder={lang[language].gptSearchPlaceholder}
                className='p-4 m-4 rounded-lg col-span-9'
             />
            <button className='p-4 my-4 mr-4 rounded-lg bg-red-800 text-white col-span-3 ' > {lang[language].search} </button>
        </form>
    </div>
  )
}

export default GptSearchBar
