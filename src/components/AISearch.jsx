import { Bckg_Img } from "../utils/constants";
import AIMovieSuggestions from "./AIMovieSuggestions";
import AISearchBar from "./AISearchBar";

const AISearch = () => {
  return (
    // BACKGROUND iMAGE
    <div>
      <div className="absolute -z-10">
        <img src={Bckg_Img} alt="backroundIMG" />
      </div>

      <AISearchBar />
      <AIMovieSuggestions />
    </div>
  );
};

export default AISearch;
