import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Bckg_Img } from "../utils/constants";

const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form
    const message = SignInForm
      ? checkValidData(null, email.current.value, password.current.value)
      : checkValidData(
          name.current.value,
          email.current.value,
          password.current.value,
        );

    setErrorMessage(message);
    if (message) return; // It means there is some error message,so just return

    // Sign In/Up Logic
    if (!SignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      ) // Auth is coming from a central place i.e. firebase.jsx
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/163971189?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!SignInForm);
  };

  return (
    <div>
      <Header />
      <div className="fixed inset-0">
        <img
          src={Bckg_Img}
          alt="backroundIMG"
          className="w-full h-full object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-5/12 xl:w-4/12 2xl:w-3/12 max-w-lg min-[2560px]:max-w-2xl absolute p-6 sm:p-10 xl:p-12 my-28 sm:my-32 md:my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80"
      >
        <h1 className="font-bold text-2xl sm:text-3xl py-2 sm:py-4">
          {SignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!SignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 sm:p-4 my-3 sm:my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-base sm:text-lg py-2">
          {errorMessage}
        </p>
        <button
          className="p-3 sm:p-4 my-4 sm:my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {SignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-2 sm:py-4 text-sm sm:text-base cursor-pointer"
          onClick={toggleSignInForm}
        >
          {SignInForm
            ? "New to CineSense? Sign Up "
            : "Already Registered? Sign In "}
        </p>
      </form>
    </div>
  );
};

export default Login;
