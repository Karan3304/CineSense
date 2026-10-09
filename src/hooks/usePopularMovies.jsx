import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.watchmode.com/v1/list-titles/?types=movie&regions=IN&release_date_start=20260101&release_date_end=20261009&sort_by=release_date_desc&limit=20",
      API_OPTIONS,
    );

    const json = await data.json();
    // Get full details for every movie
    const PopularMovies = await Promise.all(
      json.titles.map(async (movie) => {
        const data = await fetch(
          `https://api.watchmode.com/v1/title/${movie.id}/details`,
          API_OPTIONS,
        );

        return await data.json();
      }),
    );

    console.log(PopularMovies);
    dispatch(addPopularMovies(PopularMovies));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
