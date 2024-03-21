import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full text-left px-10 py-8 logo-text absolute z-10 text-[#E50914] font-bold text-4xl tracking-widest scale-y-125 backdrop-blur-[.5px] subpixel-antialiased cursor-pointer">
      <Link to="/">STREAMWISE</Link>
    </div>
  );
};

export default Header;
