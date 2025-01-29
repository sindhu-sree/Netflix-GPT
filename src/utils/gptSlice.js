import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch:false,
        movieNames:null,
        movieInfo:null
    },
    reducers:{
        toggleGptSearchView :(state,action)=>{
            state.showGptSearch= !state.showGptSearch
        },
        addGptMoviesResult : (state,action)=>{
            const {movieNames,movieInfo} = action.payload;
            state.movieNames = movieNames
            state.movieInfo = movieInfo
        }
    }
})
export const {toggleGptSearchView,addGptMoviesResult}=gptSlice.actions
export default gptSlice.reducer