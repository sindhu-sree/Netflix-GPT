import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieVideo = (movieId)=>{
    const dispatch = useDispatch()

    const getMovieVideo = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const videoArr = await data.json();
        const filterVideo = videoArr?.results.filter(video=>video?.type ==="Trailer")
        const trailer = filterVideo.length ? filterVideo[0] : videoArr.results[0]
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovieVideo()
    },[])
}

export default useMovieVideo