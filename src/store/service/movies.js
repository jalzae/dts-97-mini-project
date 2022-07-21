
import { createBaseUrl } from "@reduxjs/toolkit";

const initialStateForCounter = { baseURLimage: 'https://image.tmdb.org/t/p/w500' };

const baseURL = createBaseUrl({
  name: "baseURL",
  initialState: initialStateForCounter,
});

export const selectCounter = (state) => state.baseURL.counter;

export default baseURL.reducer;