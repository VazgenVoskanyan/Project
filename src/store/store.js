import { configureStore } from "@reduxjs/toolkit";
import { appartamentReducer } from "./slices/appartamentsSlice/appartmentsSlice";
import { carsDataReducer } from "./slices/CarsDataSlice/carsSlice";
import { JobsDataReducer } from "./slices/JobsSlice/JobsSlice";

export const store = configureStore({
  reducer: {
    appartmentsData: appartamentReducer,
    carsData: carsDataReducer,
    jobsData: JobsDataReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});


