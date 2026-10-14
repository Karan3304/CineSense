import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import AISearch from "./AISearch";

const Browse = () => {
  const showAiSearch = useSelector((store) => store.AiSearch.showAiSearch);
  usePopularMovies();

  return (
    <div>
      <Header />
      {showAiSearch ? (
        <AISearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
