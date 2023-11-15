"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { BiSearchAlt, BiCart, BiHeart, BiUser } from "react-icons/bi";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-black text-white relative">
      <div className="main-container">
        <div className="navbar-wrapper flex justify-between items-center py-3">
          <div className="flex justify-start items-center gap-14">
            <div>
              <img src="./logo.webp" alt="Main Logo" width={150} />
            </div>
            <ul
              className={`md:flex md:gap-5 md:text-sm md:items-center ${
                isNavOpen ? "nav-dropdown-open" : "hidden"
              }`}
            >
              <li className="cursor-pointer ">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/team">Team</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-start gap-2">
              <BiSearchAlt></BiSearchAlt>
              <BiCart></BiCart>
              <BiHeart></BiHeart>
              <BiUser></BiUser>
            </div>
            <div className="md:hidden z-10">
              {isNavOpen ? (
                <GiCancel
                  onClick={handleNavToggle}
                  className=" text-red-400 text-xl cursor-pointer"
                />
              ) : (
                <GiHamburgerMenu
                  onClick={handleNavToggle}
                  className=" text-xl cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
