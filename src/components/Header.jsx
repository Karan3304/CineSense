import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo/cinesense.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleAiSearchView } from "../utils/AiMovieSlice";
import { Supported_languages } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showAiSearch = useSelector((store) => store.AiSearch.showAiSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // this is the case when user SignIn
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // case when User Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribed when componente unmounts
    return () => unsubscribe();
  }, []);

  const handleAiSearchClick = () => {
    // Toggle GPT search
    dispatch(toggleAiSearchView());
  };

  const handleLangChange = (e) => {
    // change the language
    dispatch(changeLanguage(e.target.value));
  };

  const name = user?.displayName || user?.email || "User";

  return (
    <div className="absolute inset-x-0 top-0 px-4 sm:px-8 py-3 md:py-6 bg-linear-to-b from-black z-50 flex justify-between items-center flex-col gap-3 md:gap-4 md:flex-row">
      <img
        className="w-28 sm:w-36 md:w-44 min-[1920px]:w-56 mx-auto md:mx-0"
        src={logo}
        alt="CineSense"
      />

      {user && (
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-4">
          {/* language support dropdown */}
          {showAiSearch && (
            <select
              className="p-2 m-0 md:m-2 bg-gray-900 text-white text-sm md:text-base"
              onChange={handleLangChange}
            >
              {Supported_languages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* Gpt search functionality */}
          <button
            className="py-2 px-3 sm:px-4 mx-0 md:mx-4 text-sm md:text-base bg-purple-600 text-white font-bold rounded-2xl cursor-pointer"
            onClick={handleAiSearchClick}
          >
            {showAiSearch ? "HomePage" : "AI Search"}
          </button>

          {/* Welcome pill */}
          <div className="flex items-center gap-2 sm:gap-3 pl-1.5 sm:pl-2 pr-3 sm:pr-5 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/40">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-linear-to-br from-red-600 to-orange-500 flex items-center justify-center text-white text-base sm:text-lg font-extrabold uppercase ring-2 ring-red-500/80 ring-offset-2 ring-offset-black/60">
              {name.charAt(0)}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] text-gray-300">
                Welcome
              </span>
              <span className="block max-w-24 sm:max-w-40 truncate text-base sm:text-lg font-extrabold bg-linear-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                {name}
              </span>
            </div>
          </div>

          {/* Sign Out button */}
          <button
            onClick={handleSignOut}
            className="text-white font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 active:scale-95 px-4 sm:px-5 py-2 rounded-full shadow-lg shadow-black/40 transition duration-200 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
