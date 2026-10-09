import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    polularMovies: null,
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.polularMovies = action.payload;
    },
  },
});

export const { addPopularMovies } = movieSlice.actions;

export default movieSlice.reducer;
