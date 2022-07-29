import React, { useState } from "react";

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
                <div className="relative inline-block text-left">
                  <div>
                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setDrop(!drop)}>
                      Category
                      {/* <!-- Heroicon name: solid/chevron-down --> */}
                      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>


                  {drop && (<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="py-1" role="none">
                      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                      <a href="/business" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Business</a>
                      <a href="/entertainment" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Entertainment</a>
                      <a href="/eeneral" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">General</a>
                      <a href="/health" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Health</a>
                      <a href="/science" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Science</a>
                      <a href="/sports" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sports</a>
                      <a href="/technology" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Technology</a>
                    </div>
                  </div>)}
                </div>
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
            <div className="my-3">
              <div className="relative inline-block text-left">
                <div>
                  <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setDrop(!drop)}>
                    Category
                    {/* <!-- Heroicon name: solid/chevron-down --> */}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>


                {drop && (<div className="origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div className="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Business</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Entertainment</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">General</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Health</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Science</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sports</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Technology</a>
                  </div>
                </div>)}
              </div>
            </div>
            <a className="block"> </a>

          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
