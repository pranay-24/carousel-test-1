import  {createAsyncThunk, createSlice, createAction} from '@reduxjs/toolkit'

import { queryImage } from './ImgaedataAPI'

const initialState = {

}

export fetchImageAsync = createAsyncThunk(
  "imageData/fetchImage"  ,(keyword)=>{
    const response = await queryImage(keyword)
    
    return {

    }
  }
)

export const imagedataSlice = createSlice({
    name:"imageData",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
builder.addCase(fetchImageAsync.fulfilled, (state,action)=>{

})
    }
})