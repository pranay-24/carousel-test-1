import  {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { queryData } from './AidataAPI'

const initialState ={
status:"idle",
title : '',
description : '',
}

export const fetchTitleAsync= createAsyncThunk (
"Aidata/fetchTitle",
 async (textInput)=>{
 const response = await queryData(textInput)   
 console.log(response)
return response[0].generated_text
}
)

export const fetchDescriptionAsync= createAsyncThunk (
    "Aidata/fetchDescription",
     async (textInput)=>{
     const response = await queryData(textInput)   
     console.log(response)
    return response[0].generated_text
    }
    )


export const AidataSlice = createSlice({
    name:"Aidata",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder.addCase(fetchTitleAsync.pending, (state)=>{
            state.status = "pending"
        })
        .addCase (fetchTitleAsync.fulfilled, (state,action)=>{
            state.status = "idle"
            state.title = action.payload
            
        })
        .addCase(fetchDescriptionAsync.pending, (state)=>{
            state.status = "pending"
        })
        .addCase (fetchDescriptionAsync.fulfilled, (state,action)=>{
            state.status = "idle"
            state.description = action.payload
            
        })
    }

})

export const selectTitle = (state)=> state.Aidata.title;
export const selectDescription = (state)=> state.Aidata.description;
export default AidataSlice.reducer;