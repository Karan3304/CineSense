import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
  };

  const toggleSignInForm = () => {
    setSignInForm(!SignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab1fe332-993a-44d1-b60b-cd4f8d11b96e/web/IN-en-20260928-TRIFECTA-perspective_85aef51c-94d6-41ea-a1ea-1e77199158f1_large.jpg"
          alt="backroundIMG"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80"
      >
        <h1 className="font-bold text-3xl py-4">
          {SignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!SignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {SignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {SignInForm
            ? "New to CineSense? Sign Up karan"
            : "Already Registered? Sign In karan"}
        </p>
      </form>
    </div>
  );
};

export default Login;
