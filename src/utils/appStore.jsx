import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import AiReducer from "./AiMovieSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    AiSearch: AiReducer,
    config: configReducer,
  },
});

export default appStore;
