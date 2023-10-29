
import { configureStore, createReducer } from '@reduxjs/toolkit';
import AidataSlice from '../components/carousel/AidataSlice'

export const store = configureStore({
    reducer: {
      Aidata: AidataSlice,
      
    },
  });
  