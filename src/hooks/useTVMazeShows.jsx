import { useEffect, useState } from "react";

// Module-level cache: one request per page load, shared by every component
let cache = null;
let pending = null;

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

const fetchShows = () => {
  if (cache) return Promise.resolve(cache);
  if (!pending) {
    pending = fetch("https://api.tvmaze.com/shows?page=0")
      .then((r) => {
        if (!r.ok) throw new Error(`TVMaze error: ${r.status}`);
        return r.json();
      })
      .then((data) => {
        cache = data.filter((s) => s.image?.medium).map(mapShow);
        return cache;
      })
      .finally(() => {
        pending = null;
      });
  }
  return pending;
};

const useTVMazeShows = () => {
  const [shows, setShows] = useState(cache || []);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache) return;
    fetchShows().then(setShows).catch((e) => setError(e.message));
  }, []);

  return { shows, error };
};

export default useTVMazeShows;