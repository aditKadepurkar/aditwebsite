"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


function truncate(text: string, len: number) {
  const ret: string = text.substring(0, len);
  return ret;  
}

export type ProjectProps = {
  title: string;
  src: string;
  desc: string;
  github?: string;
  website?: string;
  writeup?: string;
};

const ProjectModal = (props: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverContent = (
    <div className={`cursor-pointer absolute p-4 top-0 left-0 w-full h-full flex-col justify-center items-center
    text-center sm:text-2xl text-md font-bold z-10 transition duration-300 ease-in-out flex py-6 ${isHovered ? "opacity-100" : "opacity-0"}`}>
      <h1 className="m-auto px-2 text-center text-2xl font-bold text-zinc-200">
        {props.title}
      </h1>
      <p className="text-ellipsis text-zinc-400">{truncate(props.desc, 100)}</p>

      <div className="flex justify-center space-x-4">
        {props.github ? (
          <Link href={props.github} className="z-10 sm:m-10 m-1">
        <Image
          className="relative sm:scale-100 scale-50 overflow-hidden transition duration-100 ease-in-out sm:hover:scale-105"
          src="/github-mark-white.svg"
          alt="project github link"
          width={90}
          height={90}
        />
          </Link>
        ) : null}

        {props.writeup ? (
          <Link href={props.writeup} className="z-10 sm:m-10 m-1">
        <Image
          className="relative sm:scale-100 scale-50 overflow-hidden transition duration-100 ease-in-out sm:hover:scale-105"
          src="/writeupwhite.png"
          alt="project writeup link"
          width={90}
          height={90}
        />
          </Link>
        ) : null}
      </div>
    </div>
  );
  const defaultContent = (
    <div className={`relative p-4 overflow-hidden top-0 left-0 w-full h-full flex flex-col justify-center items-center
    text-center text-2xl font-bold z-10 transition duration-300 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`}>
        <h1 className="m-auto px-2 py-1 text-center justify-center flex text-2xl font-bold text-zinc-900 bg-slate-200 rounded-xl">
          {props.title}
        </h1>
        <Image
          className="relative -z-10 w-2/5 scale-100 object-cover overflow-hidden rounded-2xl shadow-2xl shadow-gray-900"
          src={`${props.src}`}
          alt="/linkedin.png"
          fill
        />
    </div>
  )

  return (
    <div
      className={`relative sm:h-[22rem] sm:w-[27rem] h-[16rem] w-[14rem] scale-100 rounded-2xl bg-neutral-900 m-auto my-3 transition duration-300 ease-in-out overflow-hidden `}
      onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      {defaultContent}
      {hoverContent}
  
    </div>
  );
};

export default ProjectModal;
