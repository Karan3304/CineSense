import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WATCHMODE_BASE, WATCHMODE_API_KEY } from "../utils/constants";
import { addMainMovieDetails } from "../utils/movieSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.movies?.mainMovieDetails);

  useEffect(() => {
    // no id, or these details are already in the store: don't call
    if (!movieId || details?.id === movieId) return;

    const getDetails = async () => {
      try {
        const res = await fetch(
          `${WATCHMODE_BASE}/title/${movieId}/details/?apiKey=${WATCHMODE_API_KEY}`
        );
        if (!res.ok) return;
        const json = await res.json();
        dispatch(addMainMovieDetails(json));
      } catch (err) {
        // console.error(err);
      }
    };

    getDetails();
  }, [movieId, details?.id, dispatch]);
};

export default useMovieDetails;
