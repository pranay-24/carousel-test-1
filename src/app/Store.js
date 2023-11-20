
import { configureStore, createReducer, combineReducers } from '@reduxjs/toolkit';
import AidataSlice from '../components/carousel/AidataSlice'
import  ImagedataSlice  from '../components/carousel/ImageSlice';

const rootReducer = combineReducers({
  Aidata: AidataSlice,
      ImageData: ImagedataSlice,
  // add other slices as needed
});

export const store = configureStore({
    reducer: rootReducer,
  });
  