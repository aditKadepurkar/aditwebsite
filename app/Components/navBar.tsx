"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const navBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getPageName = () => {
    switch(pathname) {
      case '/':
        return 'Home';
      case '/projects':
        return 'Projects';
      case '/demos':
        return 'Demos';
      case '/blog':
        return 'Blog';
      case '/about':
        return 'About';
      default:
        return 'Menu';
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>  
      {/* mobile */}
      <div className="md:hidden flex absolute top-0 z-[100] right-0 left-0 h-[3em] bg-stone-800">
        <div className="flex items-center px-4">
          <span className="text-white font-bold text-center">{getPageName()}</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute items-center p-2 w-10 h-10 z-20 text-sm text-gray-500 rounded-lg right-0 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-[3em] left-0 right-0 bg-stone-800 transform transition-transform duration-300 ease-in-out z-[101] ${isOpen ? 'translate-y-0' : '-translate-y-[200%]'}`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" onClick={handleLinkClick} className="transition: box-sizing: border-box rounded-full bg-stone-800 px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700">
              Home
            </Link>
            <Link href="/projects" onClick={handleLinkClick} className="transition: box-sizing: border-box rounded-full bg-stone-800 px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700">
              Projects
            </Link>
            <Link href="/demos" onClick={handleLinkClick} className="transition: box-sizing: border-box rounded-full bg-stone-800 px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700">
              Demos
            </Link>
            <Link href="/blog" onClick={handleLinkClick} className="transition: box-sizing: border-box rounded-full bg-stone-800 px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700">
              Blog
            </Link>
            <Link href="/about" onClick={handleLinkClick} className="transition: box-sizing: border-box rounded-full bg-stone-800 px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700">
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* web */}
      <div className="hidden center-top animate-load-nav absolute top-[5em] z-10 mx-10 md:flex h-[3em] w-[40rem] items-center justify-between overflow-hidden rounded-lg bg-stone-800 text-xl font-bold text-white">
        <Link
          href="/"
          className={`transition: box-sizing: border-box mx-[0.5em] rounded-full px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700 ${pathname === '/' ? 'bg-stone-700' : 'bg-stone-800'}`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`transition: box-sizing: border-box mx-[0.5em] rounded-full px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700 ${pathname === '/projects' ? 'bg-stone-700' : 'bg-stone-800'}`}
        >
          Projects
        </Link>
        <Link
          href="/demos"
          className={`transition: box-sizing: border-box mx-[0.5em] rounded-full px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700 ${pathname === '/demos' ? 'bg-stone-700' : 'bg-stone-800'}`}
        >
          Demos
        </Link>
        <Link
          href="/blog"
          className={`transition: box-sizing: border-box mx-[0.5em] rounded-full px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700 ${pathname === '/blog' ? 'bg-stone-700' : 'bg-stone-800'}`}
        >
          Blog
        </Link>
        <Link
          href="/about"
          className={`transition: box-sizing: border-box mx-[0.5em] rounded-full px-4 py-2 font-bold text-white duration-500 ease-out hover:bg-stone-700 ${pathname === '/about' ? 'bg-stone-700' : 'bg-stone-800'}`}
        >
          About Me
        </Link>
      </div>
    </>
  );
}
export default navBar;
