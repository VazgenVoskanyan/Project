import { createSlice } from "@reduxjs/toolkit";
import { getAppartmentsData, getCurrentAppartment } from "./API";

export const appartamentsDataSlice = createSlice({
  name: "appartmentsData",
  initialState: {
    allAppartments: [],
    currentAppartment: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAppartmentsData.fulfilled, (state, { payload }) => {
        return {
          ...state,
          allAppartments: payload,
        };
      })
      .addCase(getCurrentAppartment.fulfilled, (state, { payload }) => {
        console.log(payload);
        return {
          ...state,
          currentAppartment: payload,
        };
      });
  },
});

export const selectAppartmentsData = (state) => state.appartmentsData;

export const {} = appartamentsDataSlice.actions;

export const appartamentReducer = appartamentsDataSlice.reducer;
