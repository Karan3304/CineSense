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


// import { createSlice } from "@reduxjs/toolkit";

// const movieSlice = createSlice({
//   name: "movies",
//   initialState: {
//     rows: {}, // { newReleases: [...], popular: [...], horror: [...] }
//   },
//   reducers: {
//     addMovieRow: (state, action) => {
//       const { key, movies } = action.payload;
//       state.rows[key] = movies;
//     },
//   },
// });

// export const { addMovieRow } = movieSlice.actions;
// export default movieSlice.reducer;
