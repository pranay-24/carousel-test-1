import  {createAsyncThunk, createSlice, createAction} from '@reduxjs/toolkit'
import { queryData,queryData1 , queryData2} from './AidataAPI'


const initialState ={
status:"idle",
// title : '',
// description : '',
currentIndex: 0,
slides:[
    {   id:0,
        title: '',
        description: ' ',
        imageUrl: ''
      },
      { id:1,
        title: '',
        description: '',
      },
      { id:2,
        title: '',
        description: '',
        imageUrl: ''
      },
      { id:3,
        title: '',
        description: '',
        imageUrl: ''
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

export const fetchSlidesAsync = createAsyncThunk (
  "Aidata/fetchSlides",
  async(inputStatement)=>{
   // console.log(inputStatement)
    const response= await queryData2(inputStatement)
//console.log(response)
   const text =  response.choices[0].message.content
//console.log(text)
   let slides = text.split('Slide ');

let slideData = [];

for(let i = 1; i < slides.length; i++) {
   let slide = slides[i].split('\n\n');
   let title = slide[0].trim();
   let content = slide[1].trim();
   slideData.push({title: title, content: content});

}
console.log(slideData);
return slideData;
  }
)

export const fetchTitleAsync= createAsyncThunk (
    "Aidata/fetchTitle",
     async ({inputTitle,index})=>{
       // console.log(inputTitle)
     const response = await queryData1(inputTitle)   
   //  console.log(response)
    const text = response[0].generated_text
    //console.log(text)
    return {
        text: text,
        index: index,
    }
    }
    )

export const fetchDescriptionAsync= createAsyncThunk (
    "Aidata/fetchDescription",
     async ({inputDescription, index})=>{
     const response = await queryData1(inputDescription )   
    // console.log(response)
    const text  = response[0].generated_text
    return {
        text : text ,
        index: index
    }

    }
    )

export const setCurrentSlideIndex= createAction (
    'Aidata/setCurrentSlideIndex',
    (index) => {
        return {
          payload: index,
        };
    })

export const updateSlides= createAction (
    'Aidata/updateSlide',
    (slides) => {
        return {
          payload: slides,
        };
    })

    export const updateTitle= createAction(
    'Aidata/updateTitle',
    ({index,newTitle}) => {
       //console.log(index);
       
        return  {
            payload:{index,
            newTitle}
        }
        
    })

    export const updateDescription= createAction (
        'Aidata/updateDescription',
        ({index,newDescription}) => {
            //console.log(newDescription,index);
            return  {
                payload:{index,
                newDescription}
            }
              ;
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
            const {text, index } = action.payload
           
            state.status = "idle"
            state.slides[index].title = text;
        })
        .addCase(fetchDescriptionAsync.pending, (state, action)=>{
            
            state.status = "pending"
        })
        .addCase (fetchDescriptionAsync.fulfilled, (state,action)=>{
            const {text, index } = action.payload;
            state.status = "idle"
            state.slides[index].description = text;
        })
        .addCase(fetchSlidesAsync.fulfilled, (state,action)=>{
          const slideData = action.payload;
          for(let i = 0; i < slideData.length; i++){
            const titleWithoutNumbering = slideData[i].title.replace(/^\d+:\s*/, '');
            const titleWithoutQuotes = titleWithoutNumbering.replace(/"/g, '');

            const contentWithoutKeyword = slideData[i].content.replace(/^Content:\s*/, '');
            state.slides[i].title = titleWithoutQuotes;
            state.slides[i].description = contentWithoutKeyword;
          }
        })
         .addCase (fetchMockData.fulfilled, (state,action)=>{
                state.status = "idle"
                const newSlide = {
                    title:action.payload.title,
                    description: action.payload.description,
                    imageUrl :"",
                }
                state.slides.push(newSlide)
              //  console.log(state.title);
        
    })
    .addCase(setCurrentSlideIndex, (state, action) => {
        state.currentIndex = action.payload;
      })
    .addCase(updateSlides, (state, action) => {
        state.slides = action.payload;
      })
      .addCase(updateTitle, (state, action) => {
       const { index, newTitle } = action.payload;
     // console.log(newTitle)
        state.slides[index].title = newTitle;
      })
      .addCase(updateDescription, (state, action) => {
        const { index, newDescription } = action.payload;
      
        state.slides[index].description = newDescription;
      })
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