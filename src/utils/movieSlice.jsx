import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: null,
    mainMovieDetails: null,
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMainMovieDetails: (state, action) => {
      state.mainMovieDetails = action.payload;
    },
  },
});

export const { addPopularMovies, addMainMovieDetails } = movieSlice.actions;

export default movieSlice.reducer;
