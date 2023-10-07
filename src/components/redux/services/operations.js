import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars } from '../../../helpers/mochAPI';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async (page = 1, thunkApi) => {
    try {
      const response = await fetchCars(page);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
