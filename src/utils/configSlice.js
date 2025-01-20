import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        selectedLanguage:"en"
    },
    reducers:{
        addLanguage:(state,action)=>{
            state.selectedLanguage = action.payload
        }
    }
})

export const {addLanguage} = languageSlice.actions
export default languageSlice.reducer