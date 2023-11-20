import  {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import { queryImage } from './ImgaedataAPI'

const initialState = {
images:[],
status:"idle",
}

export const fetchImageAsync = createAsyncThunk(
  "ImageData/fetchImage"  ,async(keyword)=>{
   try {
    const response = await queryImage(keyword)
    //console.log(response.results);
    const imageUrls = response.results.map((image) => image.urls.small);
    //console.log('Image URLs:', imageUrls);

    return imageUrls;
   }catch(error){
    throw error;
   }
    
   
    
  }
)

export const ImagedataSlice = createSlice({
    name:"ImageData",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
builder.addCase(fetchImageAsync.pending, (state) => {
  state.status = "loading";
})
.addCase(fetchImageAsync.fulfilled, (state,action)=>{
state.images = action.payload;
//console.log(action.payload)
state.status = "suceeded";

})


    }
})

export default ImagedataSlice.reducer