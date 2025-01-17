import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()

    const getNowPlayingMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS)
      const movies = await data.json();
      dispatch(addNowPlayingMovies(movies.results))
    }
  
    useEffect(()=>{
      getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies