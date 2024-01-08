import { createSlice } from "@reduxjs/toolkit";
import { getCarsData } from "./API";

export const carsDataSlice = createSlice({
  name: "carsData",
  initialState: {
    allCars: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarsData.fulfilled, (state, { payload }) => {

      return {
        ...state,
        allCars: payload,
      };
    });
  },
});

export const selectCarsData = (state) => state.carsData;

export const carsDataReducer = carsDataSlice.reducer;
