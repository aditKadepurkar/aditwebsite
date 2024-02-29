import React from "react";
import Link from "next/link";

const navBar = () => {
  return (
    <div className="center-top animate-load-nav absolute top-[5em] z-10 mx-10 flex h-[3em] w-[35%] items-center justify-between overflow-hidden rounded-lg bg-stone-800 text-xl font-bold text-white">
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
  );
}
export default navBar;
