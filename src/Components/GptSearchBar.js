import React, {  useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/LanguageConstants'
import genAI from '../utils/openaiConfig'
import { addGptMoviesResult } from '../utils/gptSlice'
import { API_OPTIONS } from '../utils/constants'

const GptSearchBar = () => {
    const language = useSelector(store=>store.language?.selectedLanguage)
    const dispatch = useDispatch()
    const searchText = useRef()

    const fetchMovies = async(movie)=>{
        const result = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await result.json();
        return json;
    }
    const handleGptSearchClick = async ()=>{
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const gptQuery = "Act as a Movie Recommendation Syatem and suggest some movies for the query: " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead.Example Result: a,b,c,d,e"
        const result = await model.generateContent(gptQuery);
        const gptSearchResults = result?.response?.candidates[0]?.content?.parts[0]?.text?.split(",")
        const promiseArray = gptSearchResults?.map((movie)=>fetchMovies(movie))
        const movieInfo = await Promise.all(promiseArray)
       
        //~~~~~~~~~~~~~~~~~~~~~~~~~~REDUCE NOT WORKING~~~~~~~~~~~~~~~~
        // const reduceMovieInfo = movieInfo.reduce((acc,obj)=>{
        //     let newArray = []
        //     obj.results?.forEach(item=>{
        //         newArray.push({id:item.id,title:item.title,posterPath:item.poster_path})
        //     })
        //     return newArray
        // })

        // ~~~~~~~~~~~~~~~~~~~~~~~~~LOOPING IS WORKING PERFECTLY~~~~~~~~~~~~~~~~~~~~~
        // const optimizedArray = []
        // const x = movieInfo?.map((a)=>{
        //     a.results?.map((item)=>{
        //         optimizedArray.push({id:item.id,title:item.title,posterPath:item.poster_path})
        //     })
        // })

        //~~~~~~~~~~~~~~~~~~~~~FLATMAP METHOD IS ALSO WORKING FINE~~~~~~~~~~~~~~~~~~~~~~
        const optimizedArray = movieInfo?.flatMap(a => 
            a.results?.map(item => ({
                id: item.id,
                title: item.title,
                posterPath: item.poster_path,
                language:item.original_language,
                overView : item.overview,
                rating:item.vote_average
            })) || []
        );
        // console.log(abc,":::::::::::FLATMAP METHOD")
        // console.log(optimizedArray,":::::::::FLATMAP METHOD")
        // console.log(reduceMovieInfo,"::::::::::REDUCE METHOD")
        dispatch(addGptMoviesResult({movieNames:gptSearchResults,movieInfo:optimizedArray}))
    }


  return (
    <div className=' pt-[10%] flex justify-center' >
        <form className='bg-black w-1/2 grid grid-cols-12  ' onSubmit={(e)=>e.preventDefault()} >
            <input 
                ref={searchText}
                type='text' 
                placeholder={lang[language].gptSearchPlaceholder}
                className='p-4 m-4 rounded-lg col-span-9'
             />
            <button 
                className='p-4 my-4 mr-4 rounded-lg bg-red-800 text-white col-span-3 '
                onClick={handleGptSearchClick}
            > {lang[language].search} </button>
        </form>
    </div>
  )
}

export default GptSearchBar
