import { createSlice } from "@reduxjs/toolkit";

const AiMovieSlice = createSlice({
  name: "aiSearch",
  initialState: {
    showAiSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleAiSearchView: (state) => {
      state.showAiSearch = !state.showAiSearch;
    },
    addAiMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearAiMovieResult: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { toggleAiSearchView, addAiMovieResult, clearAiMovieResult } =
  AiMovieSlice.actions;
export default AiMovieSlice.reducer;
