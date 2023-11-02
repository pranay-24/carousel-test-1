import  {createAsyncThunk, createSlice, createAction} from '@reduxjs/toolkit'
import { queryData,queryData1 } from './AidataAPI'


const initialState ={
status:"idle",
title : '',
description : '',
currentIndex: 0,
slides:[
    {
        title: 'Title 1',
        description: 'Description 1',
        imageUrl: 'url1'
      },
      {
        title: 'Title 2',
        description: 'Description 2',
        imageUrl: 'url2'
      }
]
}

// export const fetchTitleAsync= createAsyncThunk (
// "Aidata/fetchTitle",
//  async (textInput)=>{
//  const response = await queryData1(textInput)   
//  console.log(response)
// return response[0].generated_text
// }
// )


export const fetchTitleAsync= createAsyncThunk (
    "Aidata/fetchTitle",
     async (textInput)=>{
     const response = await queryData1(textInput)   
     console.log(response)
    return response
    }
    )

export const fetchDescriptionAsync= createAsyncThunk (
    "Aidata/fetchDescription",
     async (textInput)=>{
     const response = await queryData1(textInput)   
     console.log(response)
    return response[0].generated_text
    }
    )

export const setCurrentSlideIndex= createAction (
    'Aidata/setCurrentSlideIndex',
    (index) => {
        return {
          payload: index,
        };
    })


    export const fetchMockData= createAsyncThunk (
        "Aidata/fetchMockData",
         async ()=>{

         const response = {
            title:"Unlocking Success: Crafting an Effective Executive Assistant CV",
            description : "I want you to act as a cretae informing title about career development. I will provide you with the title of an article and your task is to come up with an informative title that conveys the information needed about the subject at hand. My first title is I need help developing an effective CV for an executive assistant position."   
         }
        // console.log(response)
        return response
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
         .addCase (fetchMockData.fulfilled, (state,action)=>{
                state.status = "idle"
                state.title = action.payload.title
                state.description = action.payload.description
        
    })
    .addCase(setCurrentSlideIndex, (state, action) => {
        state.currentIndex = action.payload;
      });

}
})

export const selectTitle = (state,index)=> {
    const slide = selectSlideByIndex(state,index)
   return slide ?  slide.title : ""}

export const selectDescription = (state,index)=> {
    const slide = selectSlideByIndex(state,index)
   return slide ?  slide.description : ""}


export const selectSlideByIndex = (state, index) => state.Aidata.slides[index];

export default AidataSlice.reducer;