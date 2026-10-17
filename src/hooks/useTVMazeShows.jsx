import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTVShows } from "../utils/movieSlice";

const mapShow = (s) => ({
  id: s.id,
  title: s.name,
  overview: (s.summary || "").replace(/<[^>]+>/g, ""),
  genres: s.genres || [],
  poster: s.image?.medium,
  posterLarge: s.image?.original,
  rating: s.rating?.average,
  releaseDate: s.premiered,
  year: s.premiered?.slice(0, 4),
  url: s.officialSite || s.url,
});

const useTVMazeShows = () => {
  const dispatch = useDispatch();
  const shows = useSelector((store) => store.movies.tvShows);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (shows) return;

    const getShows = async () => {
      try {
        const res = await fetch("https://api.tvmaze.com/shows?page=0");
        if (!res.ok) throw new Error(`TVMaze error: ${res.status}`);
        const data = await res.json();
        dispatch(addTVShows(data.filter((s) => s.image?.medium).map(mapShow)));
      } catch (e) {
        setError(e.message);
      }
    };

    getShows();
  }, [shows, dispatch]);

  return { shows: shows || [], error };
};

export default useTVMazeShows;
