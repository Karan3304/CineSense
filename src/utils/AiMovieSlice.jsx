import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";

const AiMovieSlice = createSlice({
  name: "aiSearch",
  initialState: {
    showAiSearch: false,
  },
  reducers: {
    toggleAiSearchView: (state) => {
      state.showAiSearch = !state.showAiSearch;
    },
  },
});

export const { toggleAiSearchView } = AiMovieSlice.actions;
export default AiMovieSlice.reducer;
