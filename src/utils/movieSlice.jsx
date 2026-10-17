import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: null,
    mainMovieDetails: null,
    tvShows: null,
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMainMovieDetails: (state, action) => {
      state.mainMovieDetails = action.payload;
    },
    addTVShows: (state, action) => {
      state.tvShows = action.payload;
    },
  },
});

export const { addPopularMovies, addMainMovieDetails, addTVShows } =
  movieSlice.actions;

export default movieSlice.reducer;
