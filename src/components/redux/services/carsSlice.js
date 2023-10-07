import { createSlice } from '@reduxjs/toolkit';
import { getCars } from '../services/operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
