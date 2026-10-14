import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const AISearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 bg-white col-span-9 text-bold text-xl"
          placeholder={lang[langKey].AiSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 text-bold text-xl">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default AISearchBar;
