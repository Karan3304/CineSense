import React from "react";
import logo from "../assets/Logo/cinesense.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-6 bg-linear-to-b from-black z-10">
      <img className="w-60" src={logo} alt="CineSense" />
    </div>
  );
};

export default Header;
