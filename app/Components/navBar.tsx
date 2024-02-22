import React from 'react'
import Link from 'next/link'

export default function navBar() {
  return (
    <div className = "top-[5em] absolute z-10 bg-gray-500 h-[3em] rounded-lg flex items-center text-white font-bold text-xl center-top overflow-hidden justify-between w-[35%] mx-10 animate-load-nav">
      <Link href="/" className="bg-gray-500 hover:bg-gray-700 transition: duration-500 ease-out text-white font-bold py-2 px-4 box-sizing: border-box rounded-full mx-[0.5em]">Home</Link>
      <Link href="/projects" className="bg-gray-500 hover:bg-gray-700 transition: duration-500 ease-out text-white font-bold py-2 px-4 box-sizing: border-box rounded-full mx-[0.5em]">Projects</Link>
      <Link href = "/test" className="bg-gray-500 hover:bg-gray-700 transition: duration-500 ease-out text-white font-bold py-2 px-4 box-sizing: border-box rounded-full mx-[0.5em]">Button 3</Link>
      <Link href = "/blog" className="bg-gray-500 hover:bg-gray-700 transition: duration-500 ease-out text-white font-bold py-2 px-4 box-sizing: border-box rounded-full mx-[0.5em]">Blog</Link>
      <Link href = "/about" className="bg-gray-500 hover:bg-gray-700 transition: duration-500 ease-out text-white font-bold py-2 px-4 box-sizing: border-box rounded-full mx-[0.5em]">About Me</Link>
    </div>
  )
}
