import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo/cinesense.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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

  const name = user?.displayName || user?.email || "User";

  return (
    <div className="absolute inset-x-0 top-0 px-8 py-6 bg-linear-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={logo} alt="CineSense" />

      {user && (
        <div className="flex items-center gap-4">
          {/* Welcome pill */}
          <div className="flex items-center gap-3 pl-2 pr-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/40">
            <div className="w-11 h-11 rounded-full bg-linear-to-br from-red-600 to-orange-500 flex items-center justify-center text-white text-lg font-extrabold uppercase ring-2 ring-red-500/80 ring-offset-2 ring-offset-black/60">
              {name.charAt(0)}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-300">
                Welcome
              </span>
              <span className="block max-w-40 truncate text-lg font-extrabold bg-linear-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                {name}
              </span>
            </div>
          </div>

          {/* Sign Out button */}
          <button
            onClick={handleSignOut}
            className="text-white font-bold text-sm bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 active:scale-95 px-5 py-2 rounded-full shadow-lg shadow-black/40 transition duration-200 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
