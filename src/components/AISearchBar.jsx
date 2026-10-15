import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import ai from "../utils/Gemini";

const AISearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGeminiSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an api call to Gemini and get movie/movies in result

    const GeminiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies,comma separated like the example result given ahead. Example Result : Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

    const results = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: [{ role: "user", parts: [{ text: GeminiQuery }] }],
    });
    console.log(results.text);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9 text-bold text-xl"
          placeholder={lang[langKey].AiSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 text-bold text-xl"
          onClick={handleGeminiSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default AISearchBar;
