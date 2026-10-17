import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Bckg_Img } from "../utils/constants";
import { clearAiMovieResult } from "../utils/AiMovieSlice"; // adjust path to your slice file
import AIMovieSuggestions from "./AIMovieSuggestions";
import AISearchBar from "./AISearchBar";

const AISearch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAiMovieResult());
  }, [dispatch]);

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img
          src={Bckg_Img}
          alt="backgroundIMG"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <AISearchBar />
        <AIMovieSuggestions />
      </div>
    </>
  );
};

export default AISearch;
