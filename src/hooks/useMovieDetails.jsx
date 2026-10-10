import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMainMovieDetails } from "../utils/movieSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.movies?.mainMovieDetails);

  useEffect(() => {
    // id nahi hai, ya ye movie ki details pehle se store mein hain, to call mat karo
    if (!movieId || details?.id === movieId) return;

    const getDetails = async () => {
      try {
        const res = await fetch(
          `https://api.watchmode.com/v1/title/${movieId}/details`,
          API_OPTIONS,
        );
        if (!res.ok) {
          console.error("Details error:", res.status);
          return;
        }
        const json = await res.json();
        console.log("details:", json);
        dispatch(addMainMovieDetails(json));
      } catch (err) {
        console.error(err);
      }
    };

    getDetails();
  }, [movieId]);
};

export default useMovieDetails;