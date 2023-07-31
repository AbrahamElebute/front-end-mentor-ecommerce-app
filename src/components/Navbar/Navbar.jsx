import React, { useState } from "react";
import "./Navbar.css";
import { imageAvatar, iconCart, iconMenu, logo, iconClose } from "../../assets";

const Navbar = () => {
  let [navbar, setNavbar] = useState(false);

  const handle = () => {
    setNavbar(!navbar);
    console.log(navbar);
  };
  return (
    <nav className={`wapper`}>
      <div className="border-b-2 py-4 md:py-6  flex items-center justify-between overflow-hidden border-neutral-light-grayish-blue w-full">
        <div className=" flex items-center gap-5 md:gap-12">
          <button onClick={handle}>
            <img src={iconMenu} alt="" />
          </button>
          <img src={logo} alt="logo" className="w-32 md:h-5" />

          <div
            className={` ${
              navbar ? "navbar-visible" : "navbar-hidden"
            } w-full bg-black/50 md:bg-transparent md:static absolute h-screen md:h-fit md:w-fit bottom-0 left-0`}
          >
            <ul
              className={`navUl flex flex-col md:flex-row text-black md:text-neutral-grayish-blue gap-4 p-5 pt-12 md:p-0  w-[70%]  h-screen md:h-fit  bg-white md:bg-transparent `}
            >
              <button className="block md:hidden mt-12" onClick={handle}>
                <img src={iconClose} alt="" />
              </button>
              <li className=" block md:after:hidden">
                <a
                  href="/"
                  className="text-black  max-md:font-extrabold md:text-neutral-grayish-blue"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-black  max-md:font-extrabold md:text-neutral-grayish-blue"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-black  max-md:font-extrabold md:text-neutral-grayish-blue"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-black  max-md:font-extrabold md:text-neutral-grayish-blue"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-black  max-md:font-extrabold md:text-neutral-grayish-blue"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-12 ">
          <button>
            <img src={iconCart} alt="cart" className="w-5 h-5 " />
          </button>
          <button>
            <img
              src={imageAvatar}
              alt="Avatar"
              className="w-8 h-8 md:w-12 md:h-12 border-primary-orange border-0 md:border-2 rounded-full hover:border-4 transition duration-700 ease-out cursor-pointer"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
