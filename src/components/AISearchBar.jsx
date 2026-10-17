import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import ai from "../utils/Gemini";
import { API_OPTIONS, WATCHMODE_BASE } from "../utils/constants";
import { addAiMovieResult, clearAiMovieResult } from "../utils/AiMovieSlice";
import AIShimmer from "./AIshimmer";

const AISearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const searchByTitle = async (title) => {
    const url = `${WATCHMODE_BASE}/autocomplete-search/?search_value=${encodeURIComponent(
      title,
    )}&search_type=3`; // 3 = only movies

    const res = await fetch(url, API_OPTIONS);
    if (!res.ok) throw new Error(`Watchmode ${res.status}`);

    const data = await res.json();
    return data.results?.[0]; // sirf pehla result
  };

  const handleGeminiSearchClick = async () => {
    setError(""); // purana error hata do
    dispatch(clearAiMovieResult()); // purani movies store se hatao
    setIsLoading(true); // shimmer shuru

    try {
      const GeminiQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        searchText.current.value +
        ". Only give me names of 10 movies, comma separated like the example result given ahead. Example Result : Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

      // 1. Gemini se movie names
      const results = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        // model: "gemini-3.6-flash",
        contents: [{ role: "user", parts: [{ text: GeminiQuery }] }],
      });

      const AiMoviesList = results?.candidates?.[0]?.content?.parts?.[0]?.text
        ?.split(",")
        .map((m) => m.trim())
        .filter(Boolean);

      if (!AiMoviesList?.length) {
        setError("Error while fetching movies");
        return;
      }
      // console.log(AiMoviesList);

      // 2. Watchmode se har movie ka ek result
      const moviesInfo = (
        await Promise.allSettled(AiMoviesList.map(searchByTitle))
      )
        .filter((r) => r.status === "fulfilled" && r.value)
        .map((r) => r.value);

      if (!moviesInfo.length) {
        setError("Error while fetching movies");
        return;
      }

      // console.log(moviesInfo); // har movie ka ek object
      dispatch(
        addAiMovieResult({
          movieNames: AiMoviesList,
          movieResults: moviesInfo,
        }),
      ); // adding movies to redux
    } catch (err) {
      console.error("Search error:", err.message);
      setError("Error while fetching movies");
    } finally {
      setIsLoading(false); // shimmer band, success ho ya error
    }
  };

  return (
    <div className="pt-48 sm:pt-52 md:pt-36 lg:pt-40 2xl:pt-52 px-3 sm:px-4 flex flex-col items-center">
      <form
        className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 2xl:w-5/12 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 sm:p-4 m-2 sm:m-4 bg-white col-span-8 sm:col-span-9 text-bold text-base sm:text-xl min-w-0"
          placeholder={lang[langKey].AiSearchPlaceholder}
        />
        <button
          type="button"
          disabled={isLoading}
          className="py-2 px-2 sm:px-4 m-2 sm:m-4 bg-red-700 text-white rounded-lg col-span-4 sm:col-span-3 text-bold text-base sm:text-xl disabled:opacity-60"
          onClick={handleGeminiSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>

      {isLoading && <AIShimmer />}

      {error && (
        <div className="mt-6 px-4 sm:px-6 py-3 sm:py-4 text-center text-white text-xl sm:text-2xl md:text-3xl font-bold bg-purple-700 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
};

export default AISearchBar;
