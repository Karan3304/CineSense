import React from "react";
import Header from "./Header";
const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab1fe332-993a-44d1-b60b-cd4f8d11b96e/web/IN-en-20260928-TRIFECTA-perspective_85aef51c-94d6-41ea-a1ea-1e77199158f1_large.jpg"
          alt="bacgroundIMG"
        />
      </div>

      <form className="relative p-12 bg-black">
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-white"
        />
        <button className="p-4 m-4">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
