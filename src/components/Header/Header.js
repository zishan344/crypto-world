import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between p-6 bg-slate-50 items-center md:flex-row  flex-col">
      <div>
        <Link className="font-bold text-2xl" to="/home">
          Crypto Cafe
        </Link>
      </div>
      <div>
        <Link className="mr-3 font-semibold" to="/home">
          Home
        </Link>
        <Link className="mr-3 font-semibold" to="/coins">
          Coins
        </Link>
        <Link className="mr-3 font-semibold" to="/contact">
          Contact
        </Link>
        <Link className="mr-3 font-semibold" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Header;
