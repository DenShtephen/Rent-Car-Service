import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './services/carsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
