import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { getCarById } from '../../../../helpers/mochAPI';

export const getCarDetails = createAsyncThunk(
  'favorites/getCarDetails',
  async (carsId, thunkApi) => {
    try {
      const response = await Promise.all(carsId.map(id => getCarById(id)));
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addCarToFavorites = createAction('favorites/addCar');

export const removeCarFromFavorites = createAction('favorites/removeCar');
