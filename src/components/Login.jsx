import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);

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

      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/80">
        <h1 className="font-bold text-3xl py-4">
          {SignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!SignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {SignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {SignInForm
            ? "New to CineSense? Sign Up"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
