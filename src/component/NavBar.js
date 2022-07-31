import React, { useState } from "react";
import {Link} from 'react-router-dom';

function NavBar() {
  const [show, setShow] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <>
      {/* navbar goes here */}
      <nav className="bg-gray-200 shadow-lg sticky top-0">
        <div className="px-10 mx-auto">
          <div className="flex justify-between">
            {/* logo */}
            <div className="flex space-x-1">
              <div>
                <a className="flex items-center py-4 px-2" href="/">
                  <img
                    className="h-8 w-8 mr-2"
                    src="https://img.icons8.com/ios-filled/50/000000/news.png"
                  />
                  <span className="font-bold text-2xl font-[poppins]">
                    NewsApp
                  </span>
                </a>
              </div>

              {/* primary nav */}
              <div className="flex items-center hidden md:flex ">
                <a href="#" className="hover:underline py-4 px-2">
                  Home
                </a>
                <a href="#" className="hover:underline py-4 px-2">
                  About
                </a>
                {/* the category dropdown menu */}
                




                
              </div>
            </div>

            {/* secondary nav */}
            <div className="flex items-center space-x-5 hidden md:flex">
              <a className="hover:underline" href="#">
                Log-In
              </a>
              <a
                className="bg-blue-300 px-2 py-2 rounded transition hover:bg-blue-500 hover:underline shadow"
                href="#"
              >
                Sign-Up
              </a>
            </div>

            {/* mobile ham-burger button goes here */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setShow(!show)}>
                <img
                  className="h-8 w-8"
                  src="https://img.icons8.com/external-febrian-hidayat-gradient-febrian-hidayat/64/000000/external-hamburger-ui-essential-febrian-hidayat-gradient-febrian-hidayat.png"
                />
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        {show && (
          <div className={`px-7 py-2 pb-4 md:hidden`}>
            <a href="/" className=" block px-4 py-1 my-1 hover:underline">
              Home
            </a>
            <a href="#" className="block px-4 py-1 my-1 hover:underline">
              About
            </a>
            <a className="block px-4 py-1 my-1 mb-3 hover:underline" href="#">
              Log-In
            </a>
            <a
              className="inline:block px-2 py-2 bg-blue-300 rounded transition hover:bg-blue-500 hover:underline shadow"
              href="#"
            >
              Sign-Up
            </a>
            {/* drop down menu */}
         

         
            <a className="block"> </a>

          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
