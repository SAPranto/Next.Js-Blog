'use client';
import React, { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-black text-white relative">
      <div className="main-container">
        <div className="navbar-wrapper flex justify-between items-center py-3">
          <div>
            <img src="./logo.webp" alt="logo" width={240} />
          </div>
          <ul
            className={`md:flex gap-5 items-center ${
              isNavOpen
                ? "flex flex-col gap-10 absolute right-0 top-0 bg-slate-500 text-center p-12 md:hidden"
                : "hidden"
            }`}
          >
            <li>Home</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact Us</li>
            <li>
              <button className="px-4 py-2 bg-blue-400 rounded hover:bg-blue-700 transition-colors duration-500">Click Me</button>
            </li>
          </ul>
          <div className="md:hidden z-10">
            {isNavOpen ? (
              <GiCancel onClick={handleNavToggle} className=" text-red-400 text-xl" />
            ) : (
              <GiHamburgerMenu onClick={handleNavToggle} className=" text-xl"/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
