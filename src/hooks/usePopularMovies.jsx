import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const PopularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.watchmode.com/v1/list-titles/?types=movie&regions=IN&release_date_start=20260101&release_date_end=20261009&sort_by=release_date_desc&limit=20",
      API_OPTIONS,
    );

    const json = await data.json();
    // console.log(json.titles);
    dispatch(addPopularMovies(json.titles));
  };

  useEffect(() => {
    !PopularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
