import React from "react";
import Link from "next/link";

const navBar = () => {
  
  return (
    <>  
      <div className="md:hidden flex absolute top-0 right-0 left-0 h-[3em] bg-stone-800">
        <button data-collapse-toggle="navbar-default" type="button" className="absolute items-center p-2  w-10 h-10 z-20 text-sm text-gray-500 rounded-lg right-0 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

      </div>
      <div className="hidden center-top animate-load-nav absolute top-[5em] z-10 mx-10 md:flex h-[3em] w-[40rem] items-center justify-between overflow-hidden rounded-lg bg-stone-800 text-xl font-bold text-white">
        <Link
          href="/"
          className="transition: box-sizing: border-box mx-[0.5em] rounded-full bg-stone-800 px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="transition: box-sizing: border-box mx-[0.5em] rounded-full bg-stone-800 px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700"
        >
          Projects
        </Link>
        <Link
          href="/test"
          className="transition: box-sizing: border-box mx-[0.5em] rounded-full bg-stone-800 px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700"
        >
          Button 3
        </Link>
        <Link
          href="/blog"
          className="transition: box-sizing: border-box mx-[0.5em] rounded-full bg-stone-800 px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700"
        >
          Blog
        </Link>
        <Link
          href="/about"
          className="transition: box-sizing: border-box mx-[0.5em] rounded-full bg-stone-800 px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700"
        >
          About Me
        </Link>
      </div>
    </>
  );
}
export default navBar;
